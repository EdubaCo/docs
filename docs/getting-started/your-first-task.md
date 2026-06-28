---
id: your-first-task
slug: /getting-started/your-first-task
title: Your first task
sidebar_label: Your first task
description: A step-by-step walkthrough of finding, opening, and completing your first task in Eduba.
---

# Your first task

This walkthrough takes you from signing in to completing a task and seeing the
run advance. It assumes a workflow has already been published in your tenant and
that at least one task is (or will be) assigned to you. If nothing is assigned
yet, see [Creating work](../creating-work.md) to start a run, or ask a workflow
admin to publish a definition.

## 1. Find the task

After signing in you land on **My Work**. Your inbox lists the tasks assigned to
you, newest first. Each row shows the task title, the run it belongs to, and its
due date or SLA status.

If you expect a task and don't see it:

- Check the inbox filters (assigned to me vs. my roles vs. my groups).
- Confirm the run has actually reached your step — a run only creates a task
  when its workflow advances to that step.

See [My Work](../my-work.md) for the full inbox tour.

## 2. Open and read it

Click the task to open it. A task screen has three parts:

- **The form** — the fields you need to review or fill in.
- **Context** — attachments, prior steps, and the run history so you can see how
  the case got here.
- **Actions** — the buttons you may use. *You only see the actions your
  permissions allow* (ADR-0005), so two people can open the same task and see
  different buttons.

## 3. Act

Fill in any required fields, then choose an action — for example **Approve**,
**Reject**, or **Submit**. Eduba validates your input against the step's rules
before accepting it; validation messages are specific and actionable (for
example, "SLA must be between 1 and 720 hours") rather than generic.

When you confirm:

1. Eduba **records the action** to the run's immutable audit trail (who, what,
   when).
2. The run **advances** to its next step.
3. That step's task is **created and routed** to whoever acts next — which may be
   you again, a teammate, or no one (if the run completes).

## 4. See the result

Return to **My Work**: the completed task leaves your inbox. Open
[Projects](../projects.md) to watch the run move forward in context, and to see
where it sits among related work.

## What just happened

You completed one step of a **run**, which is one execution of a **workflow
definition**. The definition decided what form you saw, which actions were
available, and where the run went next — all of which a workflow admin
configured in the [Workflow designer](../workflow-designer.md).

## Next steps

- Learn the vocabulary in depth: [Key concepts](./key-concepts.md).
- Start a run yourself: [Creating work](../creating-work.md).
- Understand why your action buttons are what they are:
  [Policy rules](../policy.md).
