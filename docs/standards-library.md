---
id: standards-library
slug: /standards-library
title: Procedures & standards library
sidebar_label: Standards library
sidebar_position: 10.5
description: Maintain controlled procedures and external standards, monitor version updates, and attach standards to workflow runs.
---

# Procedures & standards library

The **Procedures & standards library** keeps your workspace's controlled
internal procedures alongside adopted national and international standards.
Each library entry wraps a versioned document in [Documents](./documents.md)
and tracks the **adopted version** your organization currently works from
against the **latest known version** reported by a watch source.

:::info Permissions
Browsing the library is policy-filtered per entry — restricted items are only
visible to authorized roles or groups. Registering entries, editing metadata,
and adopting new versions require **`manageStandards`**. Attaching or detaching
standards on a workflow run requires **`attachStandard`**.
:::

## Browsing and filtering

Open **Library** from the sidebar to see summary counts (controlled documents,
outdated entries, procedures, and external standards) and the library table:

- Filter by **Type** (**Procedure**, **National standard**, or
  **International standard**) or search by **standard code** or **title**.
- Each row shows the entry's title, type, code, adopted version, latest known
  version, and a **History** link that opens the underlying document's revision
  history.
- Entries marked **Restricted** limit read access to a designated role or group.
- When an entry's adopted version lags behind the latest known version, it is
  flagged with an **Update** indicator.

## Registering a procedure or standard

With `manageStandards`:

1. Select **Register standard** on the **Library** page.
2. Choose the **Type** (`Procedure`, `National standard`, or
   `International standard`) and enter a **Title** and **Document path** (for
   example `standards/welding-procedure`).
3. Optionally enter a unique **Standard code** (for example `ISO 9001`) and the
   **Adopted version** (for example `Rev C`).
4. Check **Restrict read access to a role or group** if the document should not
   be visible to all workspace members.
5. Select **Register**.

Duplicate standard codes within the same workspace are rejected.

## Editing metadata and adopting a new version

From a row's **More actions** menu (available with `manageStandards`):

- **Edit** updates metadata including the **Watch source** URL (for example an
  external standards page) that monitors for newer releases.
- **Adopt new version** records the new version label as the workspace's
  adopted version once your organization has reviewed and approved the update.

## Referencing standards on runs and tasks

When a procedure or standard is attached to an open workflow run in the
[Run inspector](./run-inspector.md) (requires `attachStandard`), Eduba tracks
which runs depend on it. If a newer version of that standard is detected while
work is in progress, affected runs and tasks display a **Standard updated**
badge and banner so participants know to re-check their work against the newer
version.

## Related

- [Documents](./documents.md) — underlying revision history and file storage.
- [Run inspector](./run-inspector.md) — attaching standards to open runs and reviewing standard update flags.
- [Notifications](./notifications.md) — receiving alerts when a new standard version is detected.
- [Policy rules](./policy.md) — granting `manageStandards` and `attachStandard`.
