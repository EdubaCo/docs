---
id: packs
slug: /packs
title: Pack management
sidebar_label: Pack management
sidebar_position: 11
description: Import and manage packs — bundles of workflows, blocks, and standards that bootstrap a domain.
---

:::note ترجمه در حال انجام
این صفحه هنوز ترجمه نشده است، بنابراین محتوای آن به انگلیسی نمایش داده می‌شود. ترجمهٔ کامل در مرحله‌ای بعد افزوده می‌شود (ADR-0014 §6).
:::

# Pack management

A **pack** bundles workflows, blocks, and standards so a tenant can bootstrap a
whole domain by importing one artifact instead of building everything from
scratch. Pack management is where admins import packs, review what they contain,
and keep them up to date.

:::info Permission
Importing packs requires the **`importPack`** capability; attaching and managing
the standards they carry uses `attachStandard` and `manageStandards`. Pack
management is a tenant-admin task.
:::

## What you'll find here

This page is a skeleton; detailed content is being authored. Planned content:

- Importing a pack and reviewing its contents before applying it.
- How pack-applied policy rules and standards appear (and why they're locked).
- Updating and removing packs.

## Related

- [Policy rules](./policy.md) — pack-applied rules show here as locked grants.
- [Workflow designer](./workflow-designer.md) — using the workflows a pack provides.
