---
id: settings
slug: /settings
title: Settings
sidebar_label: Settings
sidebar_position: 14
description: Personal preferences and workspace administration.
---

# Settings

**Settings** contains personal preferences and workspace administration. The sections and actions you can use depend on your permissions, plan, and workspace configuration. Platform operators use a separate [back office](./app-admin.md).

## Personal preferences

- Under **Display**, choose a theme, density, accent color, and font for your view. Under **Language & region**, choose the interface language; its reading direction follows the language.
- Under **Notifications**, choose how each event reaches you: in the app, in the app and by email, or muted.
- Under **Away & delegation**, choose a colleague, the roles to delegate, and a start and end time. During that period the delegate receives the permissions granted by those roles. Revoke a delegation early if needed.

## Workspace administration

Administrators can update the workspace name and branding, invite and manage members, configure roles, groups and the org chart, and administer delegations. See [Roles and org chart](./roles-org.md) and [User groups](./groups.md). Managing other people's delegations requires `manageDelegations`; self-service delegation is available for your own roles.

Under **Security**, authorized administrators can configure password and session policy, multi-factor authentication, and SSO; audit and security-event pages provide event lists and export. Check the SSO configuration and administrator fallback before enforcing SSO for everyone.

Under **Storage & backups**, an authorized administrator can configure supported object storage. **Database connector** manages a supported external PostgreSQL connection and requires `manageDbConnector`. Availability depends on the plan and workspace configuration. Back up before changing databases; follow the on-screen connection validation and resolve any error before relying on a new connector.

**Plan & usage** shows subscription limits and usage. Eligible workspaces can configure an AI provider under **AI assistant**; see [AI assistant](./ai.md). Administrators with `manageArticles` can create and publish workspace knowledge articles in **Articles**. For inbound messages that could not be routed, the inbound email queue provides retry and dismiss actions to authorized operators.


## Publish a workspace article

With `manageArticles`, open **Settings → Articles** and select **New article**. Enter a title, a unique slug using lowercase Latin letters, numbers and single hyphens, and the Markdown content. Choose the language and optional tags. Set visibility to all members or select the intended roles and groups. Preview the article, choose **Draft** or **Published**, and save. For a Persian title, enter the Latin slug yourself. You can later edit, publish, return an article to draft, or delete it; deletion cannot be undone.

If a setting is missing or read-only, ask a workspace administrator to check your capability and plan. Save changes on each settings page and check for an error message if the save fails.
