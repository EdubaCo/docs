---
id: storage-and-connectors
slug: /storage-and-connectors
title: Storage and database connectors
sidebar_label: Storage & connectors
sidebar_position: 14.4
description: Switch between platform-managed and bring-your-own S3 object storage or PostgreSQL databases.
---

# Storage and database connectors

Every workspace starts on platform-managed object storage and its own dedicated
PostgreSQL database. Workspaces on the **Enterprise** plan (or explicitly
permitted by a platform operator) can connect their own S3-compatible object
storage and external PostgreSQL server ("bring your own" / BYO).

Switching where bytes or rows are stored never bypasses Eduba's
[policy engine](./policy.md) or immutable revision rules.

:::info Permissions and plan availability
- **Storage & backups** (`/settings/data`) — any member can view the current
  storage status; editing a BYO S3 connector requires **`manageUsers`**.
- **Database connector** (`/settings/db-connector`) — both viewing and editing
  require the non-delegable **`manageDbConnector`** capability, because
  connection details expose internal infrastructure.
- BYO connectors require the **Enterprise** tier unless a platform operator
  enables BYO access for the organization in the [back office](./app-admin.md).
:::

## Object storage (Settings → Storage & backups)

Open **Settings → Storage & backups** to see whether the workspace uses
platform-managed storage or a bring-your-own S3-compatible endpoint, along with
its connection status (`Active`, `Pending`, `Validating`, `Error`, or
`Suspended`).

To configure a BYO S3-compatible endpoint:

1. Enter the **Endpoint** URL, **Region** (defaults to `us-east-1`), and
   **Bucket** name.
2. Enter the **Access key** and **Secret key**, and choose whether to use
   path-style URLs (**Force path-style**, common for MinIO and self-hosted S3
   gateways).
3. Save your changes. Stored credentials are write-only and encrypted at rest;
   leaving the key fields blank on later edits preserves the existing key pair.

## Database connector (Settings → Database connector)

With `manageDbConnector`, open **Settings → Database connector** to inspect
your workspace's PostgreSQL mode (`Managed` or `BYO`), status, and last
validation timestamp.

To point the workspace at your own PostgreSQL server:

1. **Take a full backup first.** Do not switch databases on an active workspace
   without a verified backup and migration plan.
2. Enter the **Host**, **Port** (default `5432`), **Database**, **User**,
   **Password**, and **SSL mode** (`Disable`, `Require`, `Verify CA`, or
   `Verify full`).
3. Save and wait for connection validation to finish. Resolve any reported
   validation error before relying on the new connector.

Passwords are write-only and encrypted at rest. You may leave the password
blank only when editing an already-configured BYO connector whose host, port,
database, and user have not changed; switching from managed to BYO or changing
the target host requires entering the password.

## Related

- [Documents](./documents.md) — how document revisions and storage quotas work.
- [Plan, usage & referrals](./subscription-and-referrals.md) — checking managed storage and database limits.
- [App admin](./app-admin.md) — enabling BYO access or configuring connectors from the platform back office.
