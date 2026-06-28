---
id: getting-started
slug: /getting-started
title: Getting started
sidebar_label: Overview
sidebar_position: 2
description: A first walkthrough of Eduba — what it is, how work flows through it, and where to go next.
---

# Getting started

Welcome to **Eduba**, a self-hosted platform for running your organization's
work as governed, repeatable processes. Whether you are completing a task that
landed in your inbox, designing the workflow behind it, or administering the
whole tenant, this guide gets you oriented.

If you only read one page, read this one — it explains the handful of ideas the
rest of the documentation builds on.

## What Eduba is for

Most organizations run on a mix of forms, spreadsheets, chat threads, and
tribal knowledge. Eduba replaces that with **workflows**: explicit, versioned
definitions of how a piece of work moves from start to finish, who acts at each
step, and what rules apply. When a workflow runs, Eduba creates the tasks,
routes them to the right people, records every action, and enforces your
policies along the way.

You get three things at once:

- **A task inbox** for everyone — see [My Work](./my-work.md).
- **A designer** for the people who define how work should flow — see
  [Workflow designer](./workflow-designer.md).
- **An audit trail and policy layer** so the organization can trust the
  result — see [Policy rules](./policy.md).

## The core ideas

A few concepts recur everywhere in Eduba. Skim them now; the dedicated
[Key concepts](./getting-started/key-concepts.md) page goes deeper.

| Concept | What it means |
| --- | --- |
| **Task** | A single unit of work assigned to a person or role, with everything they need to act. |
| **Run** | One live execution of a workflow — the tasks for a particular case, in order. |
| **Workflow definition** | The reusable, versioned blueprint a run is created from. |
| **Subflow** | A reusable fragment of a workflow you can drop into many definitions. |
| **Project** | A grouping of related runs and tasks, with its own view and portfolio rollup. |
| **Role & policy** | Who may do what — resolved by the policy engine, the same one the docs and UI obey. |
| **Pack** | A bundle of workflows, blocks, and standards you can import to bootstrap a domain. |

## Your first five minutes

1. **Sign in** to your tenant and land on **My Work**. Any tasks already
   assigned to you appear in the inbox.
2. **Open a task** to see its form, attachments, and the action buttons
   available to you (the buttons you see depend on your permissions).
3. **Complete the task** — Eduba records the action and advances the run to its
   next step automatically.
4. **Browse Projects** to see the bigger picture: which runs are in flight and
   where they stand.
5. **Open the help panel** (the `?` button) on any screen for documentation
   scoped to where you are.

When you are ready to go end-to-end, follow
[Your first task](./getting-started/your-first-task.md).

## Where to go next

- New to the day-to-day? Start with [My Work](./my-work.md).
- Need to create work for others? See [Creating work](./creating-work.md).
- Designing how work flows? See the [Workflow designer](./workflow-designer.md)
  and the [Subflow library](./subflow-library.md).
- Administering the tenant? See [Policy rules](./policy.md),
  [Roles and org chart](./roles-org.md), [User groups](./groups.md),
  [Pack management](./packs.md), and [Settings](./settings.md).

:::note Documentation is filtered to you
You only see documentation for features you have access to. The same policy
engine that decides what you can do in the app (ADR-0005) decides which docs
pages and search results you see — so this site looks different depending on
your role.
:::
