---
id: subscription-and-referrals
slug: /subscription-and-referrals
title: Plan, usage, and referral credits
sidebar_label: Plan & referrals
sidebar_position: 14.6
description: Review your workspace's subscription tier, resource limits, storage and database quotas, referral code, and account-credit ledger.
---

# Plan, usage, and referral credits

The **Subscription** section of Settings shows what your workspace's current
plan includes and lets workspace administrators track referral rewards and
account credits.

## Plan and usage (Settings → Plan & usage)

Open **Settings → Plan & usage** to view:

- **Current plan and tier** — whether your workspace is on **Starter**,
  **Professional**, or **Enterprise**, together with active seat count.
- **Plan limits** — your plan's allowances for published workflows, monthly
  runs, seats, managed object storage, and managed database size (displayed as
  **Unlimited** where no cap applies).
- **Current quota usage** — live managed storage and database consumption
  against your plan's limits. When managed storage or database capacity is
  reached, new document uploads are refused until the plan is upgraded or space
  is freed.
- **Included features** — which plan-gated modules (such as the
  [AI assistant](./ai.md)) are enabled for your tier. Core governance features
  (workflows, tasks, documents, procedures library, and policy/audit controls)
  are included across all tiers.

Plan assignment and upgrades are managed by platform operators in the
[back office](./app-admin.md).

## Referral and credits (Settings → Referral & credits)

:::info Permission
Viewing **Settings → Referral & credits** requires the **`manageUsers`**
capability. Both the referral summary and credit ledger are read-only here;
adjustments and program settings are managed by platform operators.
:::

The page has two sections:

- **Referrals** — displays your workspace's unique **referral code** and
  copyable **share link**, your count of active referred workspaces, and (when
  the platform uses the tiered-discount reward model) your current discount
  percentage, progress toward the next tier, and expiry date.
- **Account credits** — displays your **spendable** balance, **pending**
  balance (referral rewards still within their hold window), and the immutable
  **credit ledger** showing every grant, redemption, and reversal with its
  date, source, status, and reason.

## Related

- [Storage and database connectors](./storage-and-connectors.md) — Enterprise bring-your-own storage and PostgreSQL options.
- [AI assistant](./ai.md) — plan-gated AI workflow assistance.
- [App admin](./app-admin.md) — how platform operators manage plans, wallets, and referral programs.
