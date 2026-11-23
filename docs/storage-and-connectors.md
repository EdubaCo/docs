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

## Connector secrets (Settings → Secrets) {#connector-secrets}

Connectors that collect files from, or deliver to, another company's system need
that system's login: a password, token or API key. Store it once as a **secret**
and every connector that needs it refers to it by name, so a changed password is
updated in one place.

:::info Permission
Managing secrets requires the **`manageSecrets`** capability. It is granted to
`tenant_admin` and, unlike most capabilities, cannot be granted to a custom role.
:::

- **Add secret** — give it a name (for example `customer-erp`), the value, and
  the **allowed hosts**: one per line, such as `erp.customer.com`,
  `erp.customer.com:8443`, or `*.customer.com` for every subdomain.
- **Replace value** — enter a new value when the password changes. The list
  shows when the value was last replaced.
- **Edit** — change the description or the allowed hosts.
- **Delete** — refused while a connector still uses the secret.

A secret is **write-only**: once saved, nobody can read the value back, not even
an admin. It is stored encrypted, and Eduba sends it only to its allowed hosts;
an attempt to use it anywhere else is refused before the value is decrypted.
Every use and every refused use is recorded as a security event, without the
value.

## Email connectors (Settings → Connectors) {#email-connectors}

An email connector collects mail from one mailbox and files the attachments as
document revisions. Each connector runs as a **machine user** (Settings →
Members), so its work is attributed and permissioned like any other member, and
signs in with a [connector secret](#connector-secrets) that
holds the mailbox password. The mailbox in **Settings → Email & inbox** stays the
default connector and is listed here read-only.

:::info Permission
Managing connectors requires the **`manageConnectors`** capability. It is granted
to `tenant_admin` and cannot be granted to a custom role.
:::

**Give each connector its own mailbox or folder that no person reads.** Eduba
marks mail as read when it collects it, so a mailbox people also read would lose
messages for them, and two connectors on one folder are refused. To use an
address people read, have your mail server redirect or copy its mail into the
connector's mailbox.

When you add a connector you set:

- **Mailbox** — the IMAP server, port and TLS, the username, the folder, and the
  mailbox's own address. A server on a private network (such as `10.0.0.25`)
  is refused until an app admin lists it under
  [Connector network](./app-admin.md#billing-and-platform-configuration).
- **Password secret** — its allowed hosts must include the IMAP server.
- **Runs as** — the machine user that files mail addressed to no machine user.
- **Filing rules** — each rule matches text in the sender or subject and names
  the document key to file into; `{date}` becomes the date received. Mail that
  matches no rule is parked.
- **Advanced** (optional) — the delivery headers read as recipients, allowed
  hosts that narrow the secret's, and how often to check (default every 5
  minutes).

**Which machine user a message belongs to.** Eduba reads the recipients in To,
Cc and the delivery headers (`Delivered-To`, `X-Original-To`, `Envelope-to` by
default) and matches each one exactly against the machine users' addresses.
Plus-addresses (`intake+drawings@customer.com`), aliases and server-side
redirects all work this way.

- Each machine user named gets its own copy, filed as that user.
- Mail that names no machine user (BCC, mailing lists, the bare mailbox address)
  is filed as the connector's **Runs as** user.
- Mail to a `+tag` of the mailbox address that matches no machine user is
  [parked](./inbound-email.md) as *Unknown address*.
- Bounces and automatic replies are parked; Eduba never answers them. The sender
  address only helps filing rules; it never decides who the mail belongs to.

**Pause** stops a connector from checking its mailbox until you resume it.
**Delete** stops it for good; documents already filed are kept.

## Related

- [Documents](./documents.md) — how document revisions and storage quotas work.
- [Plan, usage & referrals](./subscription-and-referrals.md) — checking managed storage and database limits.
- [App admin](./app-admin.md) — enabling BYO access or configuring connectors from the platform back office.
