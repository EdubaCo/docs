---
id: policy
slug: /policy
title: Policy rules
sidebar_label: Policy rules
sidebar_position: 8
description: Configure the capability rules that decide who may do what across the tenant.
---

# Policy rules

**Policy rules** are how a tenant admin decides who may do what. Each rule grants
or denies a **capability** (for example `createTask` or `designWorkflow`) to a
**role**. The policy engine that evaluates these rules (ADR-0005) is the single
authority used everywhere — it decides your action buttons, your navigation, and
even which docs pages you see.

:::info Permission
Managing policy rules is a tenant-admin task and requires the **`manageUsers`**
capability. See [Roles and org chart](./roles-org.md).
:::

## What you'll find here

This page is a skeleton; detailed content is being authored. Planned content:

- The role × capability matrix and how to read it.
- Adding allow/deny rules, and how deny precedence works.
- Seeded baseline rules and pack-applied rules (the locked ones).
- The per-role audit trail of policy changes.

## Related

- [Roles and org chart](./roles-org.md) — the roles these rules apply to.
- [User groups](./groups.md) — assigning roles in bulk.
- [Key concepts](./getting-started/key-concepts.md) — capabilities and the policy engine.
