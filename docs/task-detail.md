---
id: task-detail
slug: /task-detail
title: Task detail — working a task
sidebar_label: Task detail
sidebar_position: 3.5
description: The screen where you actually work a task — the workflow stepper, the Overview / Activity / Files / Comments tabs, and how to fill in and submit your step.
---

# Task detail — working a task

**Task detail** is the screen you land on when you open a task from
[My Work](./my-work.md), a [project](./projects.md), or a notification. My Work
tells you *what* is waiting for you; this screen is where you actually *do* it.
Everything you need for one step of a workflow — the history, the files, the
conversation, and the form you submit — lives here.

## The header

The top of the screen tells you which task you are on and where it sits:

| Element | Meaning |
| --- | --- |
| **Breadcrumb** | The trail back to My Work or the task's project. |
| **Task name** | What the step is asking for. |
| **Workflow** | The workflow this task's run follows. |
| **Status** | Whether the task is still active or already finished. |
| **Due / SLA** | When the step is due; overdue and at-risk tasks are flagged. |
| **Assignment** | Who the task is assigned to right now. |

You can copy a direct link to the task, or open the underlying run, from the
header's actions. As everywhere in Eduba, **you only see the actions your
permissions allow** ([policy rules](./policy.md)).

## The workflow stepper

Below the header, a compact stepper shows the whole run at a glance: which steps
are done, which one is waiting, and how far along the run is. Expand it to see a
vertical, per-step view with the actor and outcome where available —
useful when you need to know why the task reached you in its current shape, and
which step is *your turn*.

## The tabs

The body of the screen has four tabs:

- **Overview** — your turn, the last thing that happened, the task description,
  its details, and its documents. This is where you act.
- **Activity** — one interleaved feed of the whole task: step completions,
  system events, comments, and file changes, newest first. Filter it by
  *Steps*, *Comments*, or *Files* when the feed gets long.
- **Files** — every document on the task with its full version history:
  who uploaded each revision and when, plus in-browser preview for supported
  file types. Documents handed off from the project carry a lineage badge,
  documents revised during the run are marked as modified, and AFC-locked
  documents display an **AFC** lock indicator.
- **Comments** — the discussion thread for this task.

## Your turn — filling in and submitting the step

When the task is waiting on **you**, Overview leads with the *Your turn* action
card. It contains the form the workflow's step defines — typically a decision
(for example *approve*, *approve with minor comments*, or *reject*), a comment
box, and optional attachments.

- **Assign-team (staffing) steps** — when a workflow reaches a staffing step,
  the card asks you to pick the task's **Responsible** person, **Reviewer**,
  **Due date**, and — for workflows that include a review subflow — optional
  review gate actors (**Supervisor**, **Checker**, **Approver**, chosen as a
  person, a user group, or *Same as reviewer*). Later workflow steps route to
  the people you pick here.

To complete the step:

1. Read the digest of what happened last and check the files you need.
2. Complete the fields shown, including a decision or comment if the step requires them.
3. Attach files if the step supports them and they are needed.
4. **Submit.**

Eduba records your submission to the run's audit trail and advances the run to
its next step. The task may continue through additional steps; a completion banner appears when the task finishes.

If the task is **not** waiting on you — someone else holds it, or the run has
already finished — the same card is read-only. You may be able to view or comment according to your access.

## Banners and operational notices

Task detail surfaces status notices directly above the form when a task needs
special attention:

- **Input superseded** — appears after a [customer revision reset](./projects.md)
  replaces a project input this task used, showing the old and new revision
  numbers, who applied the reset, and the recorded reason.
- **Step failed / Unassignable step** — explains why the run cannot advance on
  its own and lets a blocked participant choose **Ask admin to look** to
  escalate the failure with an optional note (see [Run inspector](./run-inspector.md)).

## Related

- [My Work / Task inbox](./my-work.md) — the inbox this screen is opened from.
- [Your first task](./getting-started/your-first-task.md) — a guided
  end-to-end pass.
- [Run inspector](./run-inspector.md) — inspecting the full run, node
  payloads, and timeline.
- [Projects](./projects.md) — the task in the context of the whole case.
