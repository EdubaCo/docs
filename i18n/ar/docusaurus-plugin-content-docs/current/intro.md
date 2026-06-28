---
id: intro
slug: /intro
title: Introduction
sidebar_position: 1
description: Welcome to the Eduba platform documentation — what's here and where to start.
---

:::note ترجمة قيد التنفيذ
هذه الصفحة غير مترجمة بعد، لذا يظهر محتواها بالإنجليزية. تُضاف الترجمة الكاملة في مرحلة لاحقة (ADR-0014 §6).
:::

# Eduba documentation

Welcome to the Eduba platform documentation. This site is the platform-wide
product reference (ADR-0014): a self-hosted [Docusaurus](https://docusaurus.io)
site authored in Markdown, available in English, Arabic, and Persian (with RTL),
and rebuilt on every release.

**New here? Start with [Getting started](./getting-started.md).** It explains
what Eduba is, the handful of core ideas everything else builds on, and walks you
through completing [your first task](./getting-started/your-first-task.md).

## How this documentation is organized

The documentation follows the product's information architecture
(ADR-0014 §2). Each area maps to part of the app:

- **[Getting started](./getting-started.md)** — orientation and
  [key concepts](./getting-started/key-concepts.md).
- **[My Work](./my-work.md)** — your task inbox.
- **[Creating work](./creating-work.md)** — starting runs and tasks.
- **[Projects](./projects.md)** — grouping and tracking related work.
- **[Workflow designer](./workflow-designer.md)** and
  **[Subflow library](./subflow-library.md)** — defining how work flows.
- **[Policy rules](./policy.md)**, **[Roles and org chart](./roles-org.md)**,
  **[User groups](./groups.md)**, and **[Pack management](./packs.md)** —
  administering the tenant.
- **[Chat](./chat.md)** and **[AI assistant](./ai.md)** — collaboration and
  assistance.
- **[Settings](./settings.md)** — tenant configuration and personal preferences.
- **[App admin](./app-admin.md)** — operating the deployment itself.

:::note You see only what you can access
Documentation is role-filtered (ADR-0014 §2): the same policy engine that governs
the app (ADR-0005) decides which pages and search results this site shows you.
Pages for features you can't access won't appear in your navigation or search.
:::
