---
id: projects
slug: /projects
title: Projects and portfolio
sidebar_label: Projects
sidebar_position: 5
description: Create projects and track their tasks, runs, documents, and activity.
---

# Projects and portfolio

A project groups related tasks and product runs. Open **Projects** to search and filter the portfolio, see counts of open tasks and active runs, and open an individual project. A project can also be pinned for quicker access from the sidebar.

## Create a project

1. Open **Projects** and select **New project**.
2. Enter a project name. Add a type and customer if useful.
3. If available, choose a workflow and revision series. If you cannot start workflow runs, the project is created without a pinned workflow.
4. Select **Create project**. Open the resulting project to see its details.

Available fields and actions depend on your permissions and workspace configuration. If creation fails, check the entered details and ask a workspace administrator to check your access.

## Follow project work

On the project page, use **Tasks**, **Product runs**, **Documents**, and **History** to inspect related work. Filter the task list by priority, open a task for its details, and use the project description to record context. The activity history shows changes as tasks are created and progress. The documents tab shows project documents; see [Documents](./documents.md) for upload and sharing instructions.

You can pin or unpin a project from its card or project page. Pinning changes your navigation shortcut; it does not assign a task or change its workflow.

## Assign and reopen work

Where available and permitted, select tasks and use the bulk assignment action to set a responsible person and/or reviewer. The workflow determines which later steps use those assignments; see [Creating work](./creating-work.md).

For workflows that support project rounds, eligible tasks can be selected for reopening. A reopened task retains its identity and documents and starts a new run in a new round. A task whose current round is still running cannot be reopened yet. If the action is unavailable or rejected, check the task state and your permissions with an administrator.

## Inquiry deadline and extension requests

When a project tracks an inquiry stage and deadline, the project page shows an **Inquiry deadline** card with the current stage and due date. Authorized participants can request a deadline extension by picking a requested date and submitting; an authorized reviewer can then **Grant requested date**, **Decline**, or **Grant other date** with an alternative deadline.

## Customer revision reset

When a customer issues a newer revision of a project input document, upload the new revision on the project's **Documents** tab first. Documents whose earlier revision is still used by tasks display a stale-input indicator.

To bring affected work onto the new input:

1. Open **Apply customer revision** from the project page or the updated document's row.
2. Select the changed project inputs. Eduba computes and pre-selects the tasks still working off an earlier revision of those inputs; you can add other project tasks or uncheck tasks that do not need rework.
3. Review the previewed effects before confirming:
   - Affected tasks receive the latest revision of each selected input.
   - Any in-flight work on those tasks is cancelled; already completed work stays in the project history.
   - **AFC** (Approved For Construction) locks on the affected tasks' documents are lifted so new revisions can be uploaded, while unaffected tasks remain locked.
   - Previously issued transmittals remain unchanged in history; revised deliverables go out on the next transmittal.
   - Depending on the project's workflow state, Eduba either starts a fresh delivery run (if the previous run finished) or reopens the tasks in the current round; projects without a workflow record the change without starting a run.
4. Enter a required **Reason** and select **Apply**. The reason is recorded in the project history and shown on each affected task's **Input superseded** notice.

## Related

- [My Work](./my-work.md) — find tasks assigned to you.
- [Task detail](./task-detail.md) — inspect a task and its progress.
- [Documents](./documents.md) — upload inputs, manage revisions, and review AFC locks.
- [Run inspector](./run-inspector.md) — inspect project runs and stalled rounds.
- [Getting started](./getting-started.md) — learn the main concepts.
