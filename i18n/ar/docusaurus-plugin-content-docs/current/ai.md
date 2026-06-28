---
id: ai
slug: /ai
title: AI assistant
sidebar_label: AI assistant
sidebar_position: 13
description: The Eduba AI assistant — help with your work, grounded in your tenant's data and documentation.
---

:::note ترجمة قيد التنفيذ
هذه الصفحة غير مترجمة بعد، لذا يظهر محتواها بالإنجليزية. تُضاف الترجمة الكاملة في مرحلة لاحقة (ADR-0014 §6).
:::

# AI assistant

The **AI assistant** helps you get work done inside Eduba — answering questions,
drafting content, and acting on your behalf within the limits of your
permissions. It is grounded in your tenant's data and in this documentation
(consumed through a self-hosted documentation service, ADR-0070), so its answers
reflect *your* Eduba, not generic advice.

:::info Availability
AI is **plan-gated** (ADR-0060): it ships enabled on the paid tiers and is off on
the entry tier, so it requires the **`ai`** capability. If you don't see the
assistant, your tenant's plan doesn't include it.
:::

## What you'll find here

This page is a skeleton; detailed content is being authored. Planned content:

- Opening the assistant and asking about your work.
- How the assistant respects your permissions (it can only do what you can do).
- How documentation grounding keeps answers specific to your tenant.

## Related

- [Getting started](./getting-started.md) — the concepts the assistant reasons over.
- [Settings](./settings.md) — managing AI preferences where available.
