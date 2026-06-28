---
id: app-admin
slug: /app-admin
title: App admin
sidebar_label: App admin
sidebar_position: 15
description: The back-office for the people who operate the Eduba deployment itself.
---

:::note ترجمة قيد التنفيذ
هذه الصفحة غير مترجمة بعد، لذا يظهر محتواها بالإنجليزية. تُضاف الترجمة الكاملة في مرحلة لاحقة (ADR-0014 §6).
:::

# App admin

**App admin** is the back-office for the people who operate the Eduba deployment
itself — provisioning tenants, triaging documentation feedback, and other
platform-operator tasks. It is distinct from *tenant* administration: a tenant
admin configures one organization, while an app admin runs the whole
installation.

:::note Separate audience
App admin lives in a separate back-office with its own sign-in (ADR-0058,
ADR-0069). It is not part of any single tenant's navigation. The "request a
change / report a mistake" control on every docs page feeds the app-admin
feedback inbox described here (ADR-0014 Amendment C).
:::

## What you'll find here

This page is a skeleton; detailed content is being authored. Planned content:

- Tenant provisioning and lifecycle.
- The documentation-feedback inbox and triage flow.
- Platform-wide operational settings.

## Related

- [Settings](./settings.md) — tenant-level configuration (a different audience).
- [Getting started](./getting-started.md) — orientation to the platform overall.
