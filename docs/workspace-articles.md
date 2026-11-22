---
id: workspace-articles
slug: /workspace-articles
title: Workspace knowledge base articles
sidebar_label: Workspace articles
sidebar_position: 14.8
description: Author, scope, and publish internal Markdown guides that appear inside the in-app Help drawer for your workspace members.
---

# Workspace knowledge base articles

**Workspace articles** let your organization publish its own internal guides,
policies, and SOP notes directly inside Eduba. Published articles appear for
eligible members inside the in-app **Help drawer** (`?` button in the top bar)
under **From your organization**, alongside the platform documentation.

:::info Permission
Creating, editing, publishing, unpublishing, and deleting workspace articles
require the **`manageArticles`** capability. See [Policy rules](./policy.md).
:::

## Authoring an article

1. Open **Settings → Articles** and select **New article**.
2. Enter a **Title** and a unique **Slug** using lowercase Latin letters,
   numbers, and single hyphens (for example `product-launch-guide`). Slugs
   auto-fill from Latin titles; for Persian titles, enter the Latin slug
   yourself.
3. Write the article body in **Markdown** (headings, bold text, lists, links,
   and code blocks are supported) and switch between **Write** and **Preview**
   to check formatting.
4. Choose the article **Language** and optional comma-separated **Tags**.
5. Choose **Who can read**:
   - **All members** — visible to every signed-in member of your workspace.
   - **Specific roles and groups** — visible only to members who hold one of
     the selected roles or belong to one of the selected groups.
6. Set the status to **Draft** or **Published** and select **Save**.

## Managing published articles

In **Settings → Articles**, filter the list by **All**, **Published**, or
**Drafts**, and select any article to preview it and use its actions:

- **Publish / Unpublish** — make a draft visible in the Help drawer, or return
  a published article to draft.
- **Edit** — update the title, content, tags, language, or audience scope.
- **Delete** — permanently removes the article. Deletion cannot be undone.

## How members read workspace articles

Members do not need access to Settings to read published articles. Whenever a
member opens the **Help drawer** (`?`) from the top bar, Eduba displays
published workspace articles matching their role/group visibility under
**From your organization**.

## Related

- [Settings](./settings.md) — other workspace administration tools.
- [Roles and org chart](./roles-org.md) and [User groups](./groups.md) — the roles and groups used to scope article visibility.
- [Procedures & standards library](./standards-library.md) — version-controlled procedures and external standards attached to runs.
