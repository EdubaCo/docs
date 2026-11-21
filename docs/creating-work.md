---
id: creating-work
slug: /creating-work
title: Creating tasks and product runs
sidebar_label: Creating work
sidebar_position: 4
description: Start a task from a published workflow and assign its work.
---

# Creating tasks and product runs

Creating a task starts its governing workflow run. You need the `createTask` and `startRun` capabilities and an available published workflow. An administrator can help if either permission or a suitable workflow is missing.

## Create a task

1. In **My Work**, select **New task**. You can also start from a project's task tab; in that case the project is already selected.
2. Choose a published workflow and continue.
3. Enter the task name and select its project. Add the due date, priority, description, and other available details as needed. You can choose project documents to hand off as task-scoped copies.
4. Optionally select a responsible person and reviewer. Depending on the picker, these may be people, roles, or groups. Read any warning about steps that have no responsible person.
5. Select **Create task**. The task and its workflow run are created; open it to follow its steps and activity.

Assignment is checked against the workspace's access rules, and the workflow determines where each step goes. If the workflow is no longer published, select another or ask an administrator to publish it. If creation or assignment is denied, ask an administrator to check your permissions and the workflow configuration.

See [Your first task](./getting-started/your-first-task.md) for completing assigned work, and [Workflow designer](./workflow-designer.md) for preparing a workflow.
