---
id: packs
slug: /packs
title: Pack management
sidebar_label: Pack management
sidebar_position: 11
description: Import, activate, and publish workflow packs.
---

# Pack management

A pack bundles reusable workflow content and may include role definitions and policy rules. Importing requires `importPack`. Publishing a pack is subject to permissions and plan availability. See [Subflow library](./subflow-library.md) for working with individual subflows.

## Import and activate

1. Open the subflow library and choose **Import pack**. Browse the marketplace or choose to upload a signed `pack.json` file.
2. For an uploaded pack, choose **Use certified** to reference the publisher's definitions, or **Fork to tenant library** to make editable copies. Review the preview, including roles and policy-rule changes, then import.
3. Open **Finish setup** if activation does not start immediately. Map required pack roles to existing workspace roles or groups. An authorized user can also create matching roles automatically.
4. Resolve any reported block conflicts and select **Activate**. Unmapped optional roles do not block activation, but their associated rules and assignments remain inactive until mapped.

If verification or activation fails, read the displayed error and check the signature, role mappings, conflicts, and your permissions. Pack-applied rules may be shown as locked in the [permission matrix](./policy.md).

## Publish a pack

Where available, select **Publish a pack**, choose published organization-owned subflows, supply a pack ID and version, and select the roles and rules to include. Publish the draft and use the publication history to submit it for listing. Public marketplace listing requires platform review. See [App admin](./app-admin.md) for the platform review process.
