---
id: sign-in-and-access
slug: /sign-in-and-access
title: Sign-in and workspace access
sidebar_label: Sign-in & access
sidebar_position: 2.5
description: Locate your workspace, sign in with password, SSO, or magic link, accept an invitation, or request access.
---

# Sign-in and workspace access

Every organization on Eduba has its own isolated workspace with its own
subdomain, members, and branding. Before signing in, Eduba locates your
workspace so you land on your organization's sign-in page.

## Finding your workspace

Open `/signin` (or your organization's direct sign-in link):

- Enter your **company slug** (for example `acme`) or your **work email** to
  locate your workspace and continue to its branded sign-in page.
- Workspaces you recently signed into on this device appear under **Recent on
  this device** for one-click access (you can remove an entry at any time).

## Signing in

On your workspace's sign-in page (`/login/<slug>`):

- Enter your **work email** and **password**, optionally select **Remember me
  on this device**, and choose **Sign in**.
- If your workspace has **SSO** configured, select **Continue with SSO** to
  authenticate with your organization's identity provider.
- If you land on the wrong organization, select **Switch workspace** to return
  to workspace discovery.

Too many failed sign-in attempts temporarily rate-limit the account; wait a
short period before trying again.

## Password reset and magic links

If you cannot sign in with your password, choose **Forgot password?** on the
sign-in page:

- **Reset password** — enter your work email to receive a one-time password
  reset link, then choose a new password that meets your workspace's minimum
  length and complexity rules.
- **Sign-in link (magic link)** — switch to the email sign-in link option to
  receive a one-time link that signs you in without entering a password.

Recovery links expire quickly and can only be used once. If a link expires or
is incomplete, request a fresh one from the sign-in screen.

## Accepting an invitation

When a workspace administrator invites you, you receive an invitation link (by
email or shared directly by your administrator). Open the link, set your
password, and sign in. If the invitation link has expired, ask your workspace
administrator to resend the invitation from **Settings → Members**.

## Requesting a new workspace

If your organization does not have a workspace yet, select **Request access**
from the sign-in discovery page (`/request-access`), fill in your name, work
email, company, team size, and process details, and submit. Platform operators
review requests in the [back office](./app-admin.md) and send an invitation
link to the first workspace administrator once approved.

## Related

- [Getting started](./getting-started.md) — first-run onboarding and first five minutes.
- [Security and audit](./security.md) — password rules, session lifetimes, MFA, and SSO configuration.
- [Settings](./settings.md) — inviting and managing workspace members.
