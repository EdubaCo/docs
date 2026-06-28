---
id: my-work
slug: /my-work
title: My Work / Task inbox
sidebar_label: My Work
sidebar_position: 3
description: Your personal task inbox — how tasks arrive, how to filter and prioritize them, and how to act.
---

:::note ترجمه در حال انجام
این صفحه هنوز ترجمه نشده است، بنابراین محتوای آن به انگلیسی نمایش داده می‌شود. ترجمهٔ کامل در مرحله‌ای بعد افزوده می‌شود (ADR-0014 §6).
:::

# My Work / Task inbox

**My Work** is your home base in Eduba: the inbox of everything assigned to you,
across every workflow and project. If you do work in Eduba — and almost everyone
does — this is the screen you'll use most.

## How tasks arrive

You never create your own inbox items by hand. Tasks appear because a **run**
reached a step that routes to you. Routing can target you in three ways:

- **Directly** — the step names you specifically.
- **By role** — the step names a role you hold (for example *Checker*), and the
  task is offered to everyone with that role until someone takes it.
- **By group** — the step names a [user group](./groups.md) you belong to.

The inbox filters let you switch between *assigned to me*, *my roles*, and *my
groups* so you can see both what is yours and what you could claim.

## Reading the inbox

Each row summarizes a task:

| Column | Meaning |
| --- | --- |
| **Title** | What the task is. |
| **Run / Project** | The case and the [project](./projects.md) it belongs to. |
| **Due / SLA** | When it is due; overdue and at-risk tasks are flagged. |
| **Status** | Whether it is waiting for you, claimed, or in progress. |

Sort by due date or SLA to work the most urgent items first.

## Acting on a task

Open a task to see its form, its context (attachments and run history), and the
actions available to you. As everywhere in Eduba, **you only see the action
buttons your permissions allow** (ADR-0005). Complete the form, choose an action,
and Eduba records it to the run's audit trail and advances the run to its next
step.

For a guided end-to-end pass, see
[Your first task](./getting-started/your-first-task.md).

## Claiming and releasing

When a task is offered to a role or group rather than to you personally, you can
**claim** it to make it yours, which removes it from your teammates' offered
list. If you can't finish it, **release** it back so someone else can pick it up.
This keeps shared queues moving without two people doing the same work.

## Delegation

If you will be away, delegation can route your incoming tasks to a colleague for
a period. Delegation is governed by the `manageDelegations` capability and
configured in [Settings](./settings.md).

## Related

- [Getting started](./getting-started.md) — orientation and the core ideas.
- [Creating work](./creating-work.md) — start the runs that produce tasks.
- [Projects](./projects.md) — see your tasks in the context of the whole case.
