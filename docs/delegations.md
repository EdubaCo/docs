---
id: delegations
slug: /delegations
title: Delegations
sidebar_label: Delegations
sidebar_position: 10.2
description: Hand over your roles temporarily while you are away, or administer time-bounded delegations across your workspace.
---

# Delegations

A **delegation** lets one workspace member temporarily act with another
member's selected roles for a fixed time window — for example while someone is
on leave. During the active window, the delegate receives the permissions
granted by those roles, so work assigned to those roles keeps moving without
changing permanent role memberships.

Every delegation is time-bounded, scoped to roles the delegator actually holds,
and recorded in the audit log.

:::info Permissions
- **Arranging your own cover** under **Settings → Away & delegation** requires
  no special capability — any member who holds at least one role can delegate
  their own roles.
- **Managing delegations for other members** under **Settings → Delegations**
  requires **`manageDelegations`**.
:::

## Arrange your own cover (Away & delegation)

1. Open **Settings → Away & delegation**.
2. Select **I'm away** (available when you hold at least one role).
3. Choose the colleague who will cover for you, select which of your roles to
   delegate, set the **start** and **end** times, and optionally enter a
   **reason**.
4. Confirm to create the delegation.

The page separates your delegations into two lists:

- **Cover you've arranged** — delegations where you handed your roles to
  someone else.
- **Cover you're providing** — delegations where a colleague delegated their
  roles to you.

## Administer workspace delegations

With `manageDelegations`, open **Settings → Delegations** to view every
delegation across the workspace, create a delegation on another member's behalf
(for example when someone is unexpectedly out), or revoke any active or
scheduled delegation early.

## Delegation lifecycle and revocation

Each delegation moves through four states:

| Status | Meaning |
| --- | --- |
| **Scheduled** | Starts in the future; not active yet. |
| **Active** | Currently within its window; the delegate holds the delegated role permissions. |
| **Expired** | The end time has passed; delegated permissions ended automatically. |
| **Revoked** | Ended early by the delegator or an administrator. |

To end a delegation ahead of schedule, select **Revoke** on its row and
confirm. Revocation takes effect immediately; you do not need to wait for the
end date.

## Related

- [Roles and org chart](./roles-org.md) — permanent roles and reporting structure.
- [Policy rules](./policy.md) — how role permissions are evaluated.
- [My Work](./my-work.md) — acting on tasks routed to your roles or delegated roles.
- [Settings](./settings.md) — other personal and workspace settings.
