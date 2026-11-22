---
id: security
slug: /security
title: Security and audit logs
sidebar_label: Security & audit
sidebar_position: 14.2
description: Configure workspace password rules, session lifetimes, MFA, SSO, and inspect or export audit and security event logs.
---

# Security and audit logs

The **Security** group in Settings brings together authentication controls and
the immutable event logs for your workspace.

:::info Permission
Viewing and updating security settings, audit logs, and security events all
require the **`manageUsers`** capability. See [Policy rules](./policy.md).
:::

## Password and session policy

Open **Settings → Security** to configure how member credentials and sessions
behave:

- **Password rules** — set the minimum password length (between 8 and 128
  characters) and choose whether passwords must include an uppercase letter, a
  number, or a symbol. These rules apply whenever a member sets or resets a
  password.
- **Session lifetime** — set how many hours a member session stays valid.
- **Multi-factor authentication (MFA)** — when workspace member MFA enrollment
  is enabled on your deployment, you can require members to authenticate with
  an authenticator app. If member MFA enrollment is not yet enabled on your
  deployment, the toggle stays disabled so members cannot be locked out.
  Platform-admin sign-in always requires TOTP MFA; see [App admin](./app-admin.md).

## Single sign-on (SSO)

When an identity provider integration is available on your deployment,
**Settings → Security** lets you configure **OpenID Connect (OIDC)** or
**SAML 2.0**:

1. Enable SSO and choose the protocol (`OIDC` or `SAML`), provider display name,
   and provider endpoints (issuer URL and client ID/secret for OIDC, or
   metadata URL and entity ID for SAML).
2. Save your configuration. A previously saved client secret is never shown
   again and stays unchanged when its field is left blank.
3. Keep **Allow administrator password fallback** enabled and verify SSO
   sign-in before turning on **Enforce SSO for all members** — otherwise a
   misconfigured identity provider can block ordinary password sign-in.

## Audit logs and security events

Every sensitive write and authorization decision is recorded in an append-only
event store:

- **Settings → Audit logs** — filterable chronological log of workspace
  administrative and workflow actions (role and policy changes, member changes,
  delegations, connectors, and published definitions).
- **Settings → Security events** — dedicated view filtered to security-relevant
  events (sign-in attempts, password resets, MFA and SSO changes, and access
  denials), filterable by event kind.

Both screens support paginated browsing and **Export CSV** for compliance or
external review.

## Related

- [Sign-in and workspace access](./sign-in-and-access.md) — how members sign in, reset passwords, and accept invitations.
- [Policy rules](./policy.md) — capability rules and per-role audit history.
- [Settings](./settings.md) — overview of all workspace settings.
