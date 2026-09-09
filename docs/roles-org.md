---
id: roles-org
slug: /roles-org
title: Roles and org chart
sidebar_label: Roles & org chart
sidebar_position: 9
description: Define roles, assign them to people, and model your organization structure.
sourceFiles:
  - apps/web/src/features/settings/roles/RolesPage.tsx
  - apps/web/src/features/settings/org-chart/OrgChartPage.tsx
  - apps/web/src/features/settings/members/RoleMultiSelect.tsx
sourceHash: d8a962be0fe3774f03ca00adc5e97851a771b183454c25488306313ea1b29dd3
---

# Roles and org chart

**Roles** are the unit Eduba grants capabilities to, and the **org chart**
models the reporting structure roles and routing can reference. A tenant ships
with system roles (`tenant_admin`, `workflow_admin`, `task_worker`,
`run_watcher`); admins create custom roles for their organization and assign
them to users — directly, through the members picker, or through
[user groups](./groups.md).

:::info Permission
Managing roles and the org chart is a tenant-admin task and requires the
**`manageUsers`** capability. See [Policy rules](./policy.md).
:::

## The Roles screen

**Settings → Roles** is a single two-panel screen: the role list on the left,
and the selected role's **permission matrix and audit trail** on the right —
so a role and the capabilities it grants are edited in one place rather than
two. Everything you see here is a live read of the policy engine (ADR-0005):
the matrix never computes permissions client-side, it renders what the engine
actually stores, and every write is re-authorized and audited server-side.

- **System roles** cannot be renamed or deleted; their capabilities can still
  be extended with your own rules.
- **Custom roles** you create take a unique, token-like name (lowercase
  letters, digits, `_`/`-`) and an optional description. Deleting a role that
  is still in use is refused until it is unassigned.
- Selecting a role loads its **permission matrix** — see
  [Policy rules](./policy.md) for how to read and edit it — and its
  **audit trail**: a chronological feed of `role.created`/`role.updated`,
  `policy.ruleAdded`/`policy.ruleRemoved` events for that role, so you can see
  who granted or revoked what and when.

## Assigning roles to people

A member can hold any number of roles. The role picker used throughout
Settings (inviting a member, editing an existing one) is a multi-select
dropdown: its trigger shows the member's current roles as chips, and its menu
is a checklist of every role in the tenant. Toggling a checkbox replaces the
member's full role set with exactly what is checked — there is no separate
"add" vs. "remove" action.

## Building the org chart

**Settings → Org chart** models your organization as a single-rooted tree of
**org units** (department, team, or reporting line), each holding a set of
member users. You can create root units and child units, edit a unit's name
and type, and move members in and out of a unit through its manage-members
dialog. The editor validates moves server-side so a unit can never become its
own ancestor — the tree is always well-formed.

The org chart is read-only for non-admins. Every write is gated on
`manageUsers` the same as role management, and the structure it builds feeds
delegation, escalation, and a user's org tier elsewhere in the product.

## Using roles in workflow routing

A role is the most common way to route work: an authored step's assignee can
be set to **role** in the [workflow designer](./workflow-designer.md)'s
assignee picker, which offers the task to everyone holding that role until one
of them claims it. This is also how a [pack](./packs.md)'s shipped roles (for
example *Checker*, *Approver*) become real, assignable roles in your tenant —
by mapping them to one you create here during pack activation.

## Related

- [Policy rules](./policy.md) — the capabilities granted to roles, and how to
  read/edit the permission matrix.
- [User groups](./groups.md) — assigning roles to many users at once.
- [Pack management](./packs.md) — mapping a pack's roles onto your tenant's.
