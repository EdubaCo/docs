---
id: workflow-designer
slug: /workflow-designer
title: Workflow designer
sidebar_label: Workflow designer
sidebar_position: 6
description: Design, version, and publish the workflow definitions that runs are created from.
---

:::note ترجمه در حال انجام
این صفحه هنوز ترجمه نشده است، بنابراین محتوای آن به انگلیسی نمایش داده می‌شود. ترجمهٔ کامل در مرحله‌ای بعد افزوده می‌شود (ADR-0014 §6).
:::

# Workflow designer

The **workflow designer** is where workflow admins build the definitions that
drive every run. You lay out steps on a canvas, configure each step's form,
routing, and rules, then **publish** a version that new runs are created from.

:::info Permission
The designer requires the **`designWorkflow`** capability (workflow admin).
Publishing additionally uses `publishDefinition`. See
[Roles and org chart](./roles-org.md).
:::

## What you'll find here

This page is a skeleton; detailed content is being authored. Planned content:

- The canvas: steps, transitions, and gateways.
- Configuring a step's form, assignees, and SLA.
- Reusing fragments from the [Subflow library](./subflow-library.md).
- Versioning and publishing — and how in-flight runs keep their version.

## Related

- [Subflow library](./subflow-library.md) — reusable fragments for your definitions.
- [Key concepts](./getting-started/key-concepts.md) — definitions, versions, and runs.
- [Creating work](./creating-work.md) — starting runs from what you publish.
