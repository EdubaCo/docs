---
id: key-concepts
slug: /getting-started/key-concepts
title: Key concepts
sidebar_label: Key concepts
description: The vocabulary Eduba uses everywhere — tasks, runs, definitions, subflows, projects, roles, and packs.
---

# Key concepts

Eduba has a small, consistent vocabulary. Once these terms click, every other
screen in the product reads naturally. This page defines them and shows how they
relate.

## Tasks and runs

A **task** is a unit of work with its own details and documents. Creating a task from a published workflow starts its governing **run**. The run executes the workflow's steps; a step waiting for you can appear in [My Work](../my-work.md). A task may go through several steps before it is complete.

A **run** is one execution of a workflow. A project can group related tasks and product runs. Reopening an eligible task starts a fresh run while the task retains its identity and documents.

## Definitions, versions, and subflows

A **workflow definition** is the reusable blueprint a run is created from. It is
**versioned**: editing a definition produces a new version, and in-flight runs
keep using the version they started on, so changing a process never disrupts
work already underway. Definitions are built in the
[Workflow designer](../workflow-designer.md).

A **subflow** is a reusable fragment — a sequence of steps you expect to use in
many definitions (an approval chain, a notification pattern). You author subflows
once and reference them from many workflows; see the
[Subflow library](../subflow-library.md).

## Projects and portfolio

A **project** groups related runs and tasks so they can be tracked together,
with a portfolio rollup across projects. Projects are how managers see status
without opening every run. See [Projects](../projects.md).

## Roles, policy, and capabilities

Eduba uses **capabilities** (for example `createTask` and `designWorkflow`) and policy rules to control access. Roles grant capabilities to users. A user group is a separate collection of members that can be used for assignment; group membership does not automatically grant role permissions. Available actions depend on your permissions and the current work. See [Policy rules](../policy.md), [Roles and org chart](../roles-org.md), and [User groups](../groups.md).

## Packs and standards

A **pack** bundles reusable workflow content and can include roles and policy rules. See [Pack management](../packs.md).

## How it fits together

| You want to… | You work with… | Where |
| --- | --- | --- |
| Do work assigned to you | Tasks | [My Work](../my-work.md) |
| Kick off a process | Runs | [Creating work](../creating-work.md) |
| Define how a process flows | Definitions, subflows | [Workflow designer](../workflow-designer.md) |
| Track many runs together | Projects | [Projects](../projects.md) |
| Control who may do what | Roles, policy | [Policy rules](../policy.md) |
| Bootstrap a domain | Packs | [Pack management](../packs.md) |

Next: walk a task end-to-end in [Your first task](./your-first-task.md).
