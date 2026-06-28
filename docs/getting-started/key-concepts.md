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

A **task** is the atomic unit of work: one thing one person (or one role) needs
to do, presented with the form fields, attachments, and context required to do
it. Tasks land in your [My Work](../my-work.md) inbox.

A **run** is one live execution of a workflow — the ordered set of tasks for a
single case. Starting a run is what produces tasks. A purchase request, an
onboarding case, an inspection: each is a run of its workflow.

```text
Workflow definition  ──start──▶  Run  ──produces──▶  Tasks  ──▶  My Work inbox
   (the blueprint)              (one case)         (your work)
```

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

Eduba's **policy engine** (ADR-0005) is the single authority for *who may do
what*. Permissions are expressed as **capabilities** (for example
`createTask`, `designWorkflow`) granted to **roles**, which are assigned to
users — directly or through [user groups](../groups.md). The same engine:

- decides which **action buttons** you see on a task,
- decides which **navigation entries** appear for your tenant,
- and decides which **docs pages and search results** this site shows you.

That last point is why the documentation looks different for a task worker and a
tenant admin. See [Policy rules](../policy.md) and
[Roles and org chart](../roles-org.md).

## Packs and standards

A **pack** bundles workflows, blocks, and standards so an organization can
bootstrap a whole domain by importing one artifact rather than building from
scratch. See [Pack management](../packs.md).

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
