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
- Under **Notifications**, choose how each event reaches you: in the app, in the app and by email, or muted. See [Notifications](./notifications.md).
- Under **Away & delegation**, choose a colleague, the roles to delegate, and a start and end time. During that period the delegate receives the permissions granted by those roles. Revoke a delegation early if needed. See [Delegations](./delegations.md).

## Workspace administration

Administrators can update the workspace name and branding, invite and manage members, configure roles, groups and the org chart, and administer delegations. See [Roles and org chart](./roles-org.md), [User groups](./groups.md), and [Delegations](./delegations.md). Managing other people's delegations requires `manageDelegations`; self-service delegation is available for your own roles.

Under **Security**, authorized administrators can configure password and session policy, multi-factor authentication, and SSO; audit and security-event pages provide event lists and export. Check the SSO configuration and administrator fallback before enforcing SSO for everyone.

Under **Storage & backups**, an authorized administrator can configure supported object storage. **Database connector** manages a supported external PostgreSQL connection and requires `manageDbConnector`. Availability depends on the plan and workspace configuration. Back up before changing databases; follow the on-screen connection validation and resolve any error before relying on a new connector.

**Plan & usage** shows subscription limits and usage, and **Referral & credits** lets administrators share their workspace referral code and review earned credits. Eligible workspaces can configure an AI provider under **AI assistant**; see [AI assistant](./ai.md). Administrators with `manageArticles` can create and publish workspace knowledge articles in **Articles**. For inbound messages that could not be routed, **Email & inbox** provides retry and dismiss actions to authorized operators; see [Inbound email](./inbound-email.md).


## Configure security

With permission to manage security settings, open **Settings → Security**. Set the password rules and session lifetime, and decide whether members must use multi-factor authentication. To use single sign-on, select the configured protocol, enter the identity-provider details, and save. A saved client secret is preserved when its field is left blank. Verify sign-in and the administrator password fallback before enforcing SSO for all members; otherwise an incorrect provider configuration can prevent ordinary password sign-in.

Use **Audit logs** and **Security events** to filter and review recorded events or export the list as CSV. If a setting cannot be saved, check the highlighted fields and your permissions.

## Invite and manage members

1. With permission to manage users, open **Settings → Members** and choose **Invite member**.
2. Enter an email address, choose at least one role, and enter the optional name. You may set an initial password if the member needs immediate sign-in without email.
3. Submit the form. If an invitation link is displayed, copy it for the intended member. When email is unavailable, share the link directly; it expires at the time shown.
4. Use the member's actions to resend an invitation, deactivate or reactivate access. Deactivation ends active sessions. Confirm the target carefully before deactivating; permanent erasure of personal data is irreversible.

For multiple members, **Bulk import** accepts a CSV file or pasted CSV. Preview the rows, fix reported errors, and confirm the import. See [Roles and org chart](./roles-org.md) before choosing permissions.

## Publish a workspace article

With `manageArticles`, open **Settings → Articles** and select **New article**. Enter a title, a unique slug using lowercase Latin letters, numbers and single hyphens, and the Markdown content. Choose the language and optional tags. Set visibility to all members or select the intended roles and groups. Preview the article, choose **Draft** or **Published**, and save. For a Persian title, enter the Latin slug yourself. You can later edit, publish, return an article to draft, or delete it; deletion cannot be undone.

If a setting is missing or read-only, ask a workspace administrator to check your capability and plan. Save changes on each settings page and check for an error message if the save fails.
