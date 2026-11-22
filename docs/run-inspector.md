---
id: run-inspector
slug: /run-inspector
title: Run inspector
sidebar_label: Run inspector
sidebar_position: 3.7
description: Inspect a workflow run's status, nodes, timeline, linked documents, referenced standards, and escalations.
---

# Run inspector

The **Run inspector** shows the live execution record of a single workflow run.
While [Task detail](./task-detail.md) focuses on the step currently assigned to
you, the run inspector shows the full node progression, per-node inputs and
outputs, the chronological event timeline, linked documents, and any stalled or
failed steps.

You can open a run from the **Open run inspector** action in
[Task detail](./task-detail.md), from the **Product runs** tab of a
[project](./projects.md), or by entering a run ID in the **Run inspector** tab
of the [Workflow designer](./workflow-designer.md).

:::info Access
Viewing a run is governed by the [policy engine](./policy.md). If you do not
have access to a run's details, ask the run owner or a workspace administrator
to check your role and permissions.
:::

## Run header and status

The header summarizes the run at a glance:

| Field | Meaning |
| --- | --- |
| **Workflow & version** | The definition name, immutable revision number, and copyable definition reference the run started on. |
| **Status** | Whether the run is **Running**, **Completed**, **Failed**, **Cancelled**, or **Suspended**. |
| **Timing & steps** | When the run started, its duration, and how many steps have finished. |
| **Round progress** | On project-scoped runs with rounds, how many enrolled tasks in the current round have completed. |

When a run finishes, a completion banner indicates whether it succeeded cleanly,
completed with one or more rejected or returned steps, completed with a failed
step, failed, or was cancelled.

## Nodes and drill-down

The **Nodes** progression shows every node the run has entered, together with
its status (**Completed**, **Running**, **Waiting**, **Failed**, or
**Skipped**). For gate nodes that pause and resume, both halves appear in the
progression.

Select any node to open its **drill-down** panel and inspect its recorded
**Input**, **Output**, and **Error** payloads. Selecting a node also filters the
event timeline below to that node; choose **Clear selection** to return to the
full run timeline.

## Timeline and context

- **Timeline** — lists recorded run events in chronological order. Expand an
  event to read its payload, and select **Load more** if additional pages of
  events are available.
- **Context & linked documents** — shows the task or project the run belongs to
  and lists every linked document with its latest finalized revision.
- **Referenced standards** — when you hold the `attachStandard` capability, you
  can attach controlled procedures or standards from the
  [Procedures & standards library](./standards-library.md) to an open run, or
  detach them while the run is still open. If a newer version of a referenced
  standard is detected, a warning banner flags the run for review.

## Taking action from the inspector

If you hold an open wait token on the run, an **Action** panel appears with the
step's form (such as decision, comment, and optional file attachments).
Submitting the form records your decision and advances the run, just as it does
in [Task detail](./task-detail.md). If another participant holds the step, or
the run is already closed, the inspector is watch-only.

## Failed steps, unassignable steps, and stalled rounds

The inspector surfaces operational issues directly at the top of the screen:

- **Failed step** — shows a banner noting that administrators have been
  notified, along with a tracking reference on the failed node. If the failure
  is blocking your work, choose **Ask admin to look** to escalate it with an
  optional note (avoid entering personal data).
- **Unassignable step** — warns when a step is routed to a role, group, user, or
  rule that currently matches no active member, so the run cannot move forward
  until an administrator fixes the assignment or role membership.
- **Stalled round** — on a project delivery run, lists any tasks in the current
  round that can no longer finish (for example because a task's run failed or a
  customer revision superseded its input) and must be reopened before the
  project can advance.

## Related

- [Task detail](./task-detail.md) — day-to-day screen for working a single task.
- [Projects](./projects.md) — tracking project runs, rounds, and customer revisions.
- [Procedures & standards library](./standards-library.md) — standards you can reference on a run.
- [Workflow designer](./workflow-designer.md) — authoring the definitions that runs execute.
