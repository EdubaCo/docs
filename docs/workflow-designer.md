---
id: workflow-designer
slug: /workflow-designer
title: Workflow designer
sidebar_label: Workflow designer
sidebar_position: 6
description: Design, version, and publish the workflow definitions that runs are created from.
sourceFiles:
  - packages/blocks/src/human-decision.ts
  - packages/workflow-modeler/src/react/AssigneeField.tsx
  - packages/workflow-modeler/src/react/WaitTimerConfig.tsx
  - packages/workflow-modeler/src/react/PropertiesPanel.tsx
sourceHash: 267b928a6f8db428a5cee5e9ee84a6f60acf5c4cea90c00ae0c23ffd29ac0bc4
---

# Workflow designer

The **workflow designer** is where workflow admins build the definitions that
drive every run. Eduba compiles what you author to real BPMN 2.0 and runs it on
an embedded Flowable engine (ADR-0048) — the canvas is a fork of the bpmn.io
modeler with a Eduba block palette and a manifest-driven properties panel. You
lay out steps, configure each step's form, assignee, and rules, then **publish**
a version that new runs are created from.

:::info Permission
The designer requires the **`designWorkflow`** capability (workflow admin).
Publishing additionally uses `publishDefinition`. See
[Roles and org chart](./roles-org.md).
:::

## The canvas

Drag blocks from the palette onto the canvas and connect them with sequence
flows and gateways, exactly as in any BPMN editor. Every non-human block
compiles to a service task backed by a TypeScript worker (`BlockRuntime`); a
`human`-category block compiles to a real BPMN user task, so it shows up in the
assignee's [My Work](./my-work.md) inbox with no extra wiring. Selecting an
element opens the **properties panel**, which renders a config field per the
block's manifest (`config.schema`) — text, numbers, booleans, enums, and a
directory-aware assignee picker, described below.

## Assigning work to a role

Any element-template field of type `assignee` — including a `human` block's
`assignee` config — renders as a segmented picker with six tabs: **role**,
**user**, **group**, **dynamic**, **rule**, and **advanced**.

- **Role** searches the tenant's roles and, on selection, writes
  `{ type: 'role', roleId }`. This is the common case for a step that should be
  offered to *whoever holds a role* (for example every `checker`) rather than a
  specific person — the engine resolves the role to candidate users through the
  policy engine at wait-token creation (ADR-0005 §3).
- **User** and **group** work the same way, writing `{ type: 'user', userId }`
  or `{ type: 'group', groupId }` from a searchable directory.
- **Dynamic** takes a source path (for example `n3.outputs.reviewerUserId`) so
  the assignee is resolved from an upstream step's output at run time.
- **Rule** references a policy `ruleRef` the policy engine resolves.
- **Advanced** is a raw-JSON fallback for a composite spec (`any`/`all` of the
  above) or a hand-typed value — nothing an older definition wrote is ever lost,
  and picking a tab from any other tab upgrades the stored value to the
  canonical object shape the moment you touch it.

The chosen spec is an `AssigneeSpec` (ADR-0002 §1b), the same shape every
human-wait block accepts, so it behaves identically whether the step sits in a
parent workflow or inside a certified subflow's body (ADR-0076).

## SLA and escalation on a decision step

The `human.decision` block — the generic block behind an authored decision step
(for example an MRB's use-as-is / rework / scrap, or a CCB's approve / reject /
defer) — carries an optional SLA deadline and escalation ladder in its config,
alongside the `outcomes` the resolver chooses from:

- **`slaAt`** — an absolute ISO-8601 deadline, or **`slaHours`** — a relative
  budget in hours from when the wait opens. `slaAt` takes precedence when both
  are set.
- **`escalation.steps`** — an ordered list of `{ offsetMs, assignee }` rungs.
  Each rung names how long before the deadline it fires and an `AssigneeSpec`
  (the same picker described above) for who it re-resolves to. Escalation is
  only meaningful when the node also has a deadline.

**As it stands today, these fields render as plain text/JSON inputs in the
properties panel** — there is no dedicated ladder-rung editor with add/remove
rows yet. An author sets `slaHours` as a number and, for escalation, edits the
`steps` array as JSON. The semantics are fully implemented on the engine side
(the deadline compiles to a BPMN timer boundary event and escalation to a
listener that re-resolves the `AssigneeSpec`, per ADR-0048's concept→BPMN
mapping) — only the authoring surface is unpolished. Treat this as the current,
real behavior rather than a preview of a future ladder UI.

**Do not confuse this with two similarly-named but unrelated controls:**

- The **Wait control**'s single "hours" field (a plain BPMN `timeDuration`) is
  an unconditional delay with no assignee and no ladder — it is not an SLA.
- **Escalate** on a *failed* step (the run inspector / Task Detail's failed-step
  banner, ADR-0078) is a blocked person's hand-off to an administrator after
  something has already gone wrong. It has nothing to do with designer-authored
  SLA config and cannot be set from the designer.

## Versioning and publishing

Editing a definition never changes work already in flight: a definition is
**versioned**, and each publish produces a new immutable revision. A run keeps
using the version it started on for its entire lifetime — an in-flight approval
chain is unaffected by a designer change made an hour later. Only a published
version can be started; drafts are visible only in the designer.

## Reusing fragments

A step you expect to repeat across definitions — an approval chain, a
notification pattern — belongs in the [Subflow library](./subflow-library.md)
as a reusable fragment instead of being redrawn on every canvas. A certified
subflow's body may itself contain `human` blocks; the designer and the engine
handle that the same way as a parent-graph human step (ADR-0076), with the
one current limitation that a body supports at most one in-flight human wait
per subflow instance.

## Related

- [Subflow library](./subflow-library.md) — reusable fragments for your definitions.
- [Key concepts](./getting-started/key-concepts.md) — definitions, versions, and runs.
- [Creating work](./creating-work.md) — starting runs from what you publish.
- [Roles and org chart](./roles-org.md) — the roles an assignee picker searches.
