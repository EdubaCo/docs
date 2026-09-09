---
id: policy
slug: /policy
title: Policy rules
sidebar_label: Policy rules
sidebar_position: 8
description: Configure the capability rules that decide who may do what across the tenant.
sourceFiles:
  - apps/web/src/features/settings/roles/PermissionMatrix.tsx
sourceHash: caacf721b0a775357924bb62fed3030b55e81b87b6fda64622343e6a535dd671
---

# Policy rules

**Policy rules** are how a tenant admin decides who may do what. Each rule
grants or denies a **capability** (for example `createTask` or
`designWorkflow`) to a **role**. The policy engine that evaluates these rules
(ADR-0005) is the single authority used everywhere — it decides your action
buttons, your navigation, which document you may open or write to, and even
which docs pages and search results this help site shows you.

:::info Permission
Managing policy rules is a tenant-admin task and requires the **`manageUsers`**
capability. See [Roles and org chart](./roles-org.md).
:::

## Where you edit rules

Policy rules are not a separate screen — they live inside
**Settings → [Roles](./roles-org.md)**, as the **permission matrix** on the
right of a selected role: one row per capability, grouped by domain (users,
settings, workflows, projects, tasks, library), and one column for the rule's
effect.

## Reading and editing the matrix

Each capability cell is a three-state control:

- **Allow** — an explicit grant.
- **Deny** — an explicit denial, which always wins over an allow at any other
  layer (deny-wins, see below).
- **—** (no rule) — neither granted nor denied by this role; the engine's
  default with no matching rule is deny.

Edits are staged locally as you click cells, then committed together with
**Save changes** — the matrix batches the diff into add/remove calls against
the live engine rather than writing on every click. Removing an existing
*allow* is treated as a lock-out risk and asks for confirmation before it is
sent.

## Locked rows: baseline and pack-applied rules

Some rows carry a **lock icon** and cannot be toggled from the matrix:

- **Seeded baseline rules** — the capability grants every tenant is
  provisioned with out of the box (for example `tenant_admin` holding
  `manageUsers`/`manageTenantSettings`, `workflow_admin` holding
  `designWorkflow`/`createTask`/`startRun` and the rest of the design-time
  workflow set — the two are a deliberate, disjoint split; see ADR-0005 §1's
  2026-07-28 amendment for why).
- **Pack-applied rules** — the `defaultRules` a [pack](./packs.md) added on
  import. These came from the pack, not a manual grant, so changing them means
  updating or removing the pack rather than hand-editing a cell.

You can still add your **own** rule alongside a locked one — including a
narrower deny over the same capability, which still wins per deny-precedence.

## How deny precedence works

The engine evaluates a fixed set of layers in order — platform, tenant org,
workflow capability, run context, resource, block manifest — and **the first
explicit deny at any layer wins**, regardless of allows at other layers. A
request that clears every layer with no deny is allowed; a request matched by
no rule at all is denied by default. This is why an admin can always author a
narrower restriction (for example "deny this one role even though a pack
granted it broadly") without having to touch the broader grant itself.

Beyond role-scoped rules, the engine also seeds narrower **resource-** and
**run-scoped** grants the matrix does not show as toggleable rows — for
example, a task's own responsible may write that task's own documents only
while their step is open, independent of any role they hold. These exist so a
structural fact ("this is *your* task, right now") can authorize an action
without widening a role grant that would apply everywhere. See ADR-0005 for
the full model.

## The audit trail

Every policy evaluation for a sensitive action is recorded as an immutable
audit event — denies are always logged, and allows for sensitive actions
(publishing a definition, approvals, plugin attachment) are always logged too.
Per-role rule changes (`policy.ruleAdded`/`policy.ruleRemoved`) appear in that
role's audit trail on the Roles screen, alongside role create/update events.

## Related

- [Roles and org chart](./roles-org.md) — the roles these rules apply to, and
  where the matrix lives.
- [User groups](./groups.md) — assigning roles in bulk.
- [Pack management](./packs.md) — how a pack's rules land as locked grants.
- [Key concepts](./getting-started/key-concepts.md) — capabilities and the
  policy engine.
