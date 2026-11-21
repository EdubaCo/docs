---
id: app-admin
slug: /app-admin
title: App admin
sidebar_label: App admin
sidebar_position: 15
description: Operate the platform back office and manage workspaces, billing, and submissions.
---

# App admin

The back office is for platform operators, not ordinary workspace administrators. It has a separate sign-in and requires a verified platform-admin session, including multi-factor authentication. A workspace session alone does not grant access.

## Access requests and workspaces

In **Access requests**, inspect pending requests and approve or reject them. Approval creates the workspace and prepares an invitation for its first administrator. If invitation email cannot be queued, share the displayed link with the requester. If provisioning fails, the workspace may already exist: use the approval retry rather than assuming nothing was created.

Use **Subscriptions** to select an organization, assign or change its plan, record manual payments, and inspect its status. Operators can create, suspend, and unsuspend organizations. Suspension immediately removes user access until it is lifted. Re-running provisioning can roll back and drop the organization's database if a step fails; use it only to finish a failed setup, not as routine maintenance for an active organization.

## Billing and platform configuration

**Plans** manages the plan catalog, limits, prices and availability. **Wallets** shows account credit and allows reasoned adjustments. **Invoices** records and tracks manual invoices. Referral and affiliate screens manage rewards, commissions, and items held for review. Check the applicable plan and financial records before making changes.

**AI default** sets the provider configuration used by eligible workspaces without their own model. Each workspace still enables AI in its own settings.

## Review submissions

In **Docs feedback**, filter and review reader submissions, then mark them triaged, resolved, or dismissed as appropriate. In **Pack moderation**, inspect marketplace submissions and certify or reject them; a rejection requires a reason visible to the publisher.

For settings within a single organization, see [Settings](./settings.md). If an action fails, check the displayed error and platform-operator access before retrying.
