---
id: privacy
slug: /privacy
title: Privacy policy
sidebar_label: Privacy policy
sidebar_position: 1
description: What personal data Eduba collects, why, where it is kept, for how long, and how to reach us about it.
---

# Privacy policy

:::warning Draft
Draft, version 0.1, last updated 2026-11-25. This text is incomplete: the bracketed parts are still to be filled in.
:::

This policy covers the Eduba service: the workspaces we host for companies, the access-request form, and this documentation site.

## Who we are

Eduba is operated by [Legal entity name and address — to be completed] ("we"). For any question about this policy or your data, write to [support@eduba.ir](mailto:support@eduba.ir).

## Who decides about your data

- **Workspace data.** Each customer company has its own workspace. The company decides what goes into it and who can see it, so it is the controller of that data. We process it on the company's behalf, to run the service.
- **Access requests and running the service.** For access requests, server logs and the security of the service, we decide, so we are the controller.

## What we collect

### When you request access

Your name and work e-mail, and if you give them, your company, team size and message. We also keep the page language and, when you came through a referral link, its referral code. We use them to review your request, reply to you and, if we approve it, to create your workspace and invite you as its first admin.

### When you use a workspace

- **Your account:** your name, your e-mail, your roles and groups, and the settings you choose. Your password is stored only as a one-way hash (argon2id). If you turn on two-step sign-in, its authenticator secret is stored encrypted.
- **Sign-in sessions:** a random session token with its expiry time.
- **Audit log:** a record of actions in the workspace (who did what, and when), including successful and failed sign-ins.
- **Workspace content:** what your company puts in Eduba, such as tasks, workflows and their runs, documents, uploaded files and comments.

### On this documentation site

If you use the "Request a change" form at the end of a page, we store your message, the page and its language, and any contact details you choose to give.

### Server logs

Our servers log each request with its time, the address requested and your IP address. We use these logs to keep the service secure, to limit abuse (for example, too many sign-in attempts) and to fix problems.

## Cookies and browser storage

Eduba sets one cookie: `session_id`, which keeps you signed in. Scripts on the page cannot read it. It is removed when you sign out, and it expires after a period your workspace sets. Our own operators' admin console uses a similar session cookie of its own.

We set no advertising or tracking cookies. Some conveniences are kept in your browser's local storage instead: your language and theme, recently used workspaces, recent searches, product tour progress, and your answer to the usage-analytics question.

## Usage analytics (opt-in)

On Eduba's own service we ask signed-in users whether we may collect usage analytics. Nothing is collected until you say yes. If your browser sends Do Not Track or Global Privacy Control, we treat that as a no and do not ask.

If you say yes:

- We record which screens you open (as page types, never real addresses or IDs) and a few actions, such as raising a task or finishing a step, and errors you run into.
- Events are sent to PostHog (PostHog Inc., EU region) through our own server, so PostHog does not see your IP address. They carry a pseudonymous ID that only we can link to your account. They never include your name, e-mail, file names or what you type, with one exception: an error report keeps the error message, which can occasionally repeat a value shown on screen. PostHog keeps them for up to one year.
- Session recordings are a separate opt-in, off by default. They hide all text and everything you type.

You can change both choices at any time in **Settings → Privacy**.

## AI features

Some plans include AI features, such as the workflow assistant and AI review steps. When someone in your workspace uses one, the text it needs is sent to an AI provider to produce the answer. On Eduba's service the default provider is Anthropic. Where your plan allows, your workspace admin can set your company's own provider instead; that provider then receives the text.

## E-mail

We send e-mail from our own mail server: invitations, sign-in and password-reset links, workflow notifications, and replies to access requests.

## Where your data is kept

Workspace data, files, logs and e-mail are kept on servers and machines we operate ourselves: [Data location, including where backup copies are kept: country and hosting provider — to be completed]. Each workspace has its own database and its own file storage.

If your company connects its own database, file storage or mailbox to its workspace, the data in them stays under your company's control.

## Who else receives data

We do not sell personal data and do not use it for advertising. Only these two services receive personal data from us:

| Who | What for | When |
|---|---|---|
| PostHog Inc. (EU region) | Usage analytics | Only if you opt in |
| Anthropic | AI features | Only when someone in your workspace uses an AI feature, and your workspace uses the default provider |

We may also disclose data when the law requires it.

## Security

- All connections to Eduba use HTTPS.
- Passwords are stored only as hashes. Authenticator secrets and the credentials of connected services are stored encrypted.
- Each workspace has its own database and file storage.
- Workspace admins can require two-step sign-in.
- Sign-in attempts and access requests are rate-limited.
- Passwords, tokens and other secrets are removed from our logs.

## How long we keep data

- **Workspace data** is kept as long as the workspace is active, then deleted on request or at contract end. Before deletion, your company can receive an export of its data. Our security log keeps a record that the workspace was closed.
- **A deleted user:** when a workspace admin deletes a user, we erase their name, e-mail, password and authenticator secret and end their sessions. The audit log keeps the record of their actions, but it no longer names them. Comments and other text people wrote stay as your company's records.
- **Access requests** that no one answers expire after 30 days. Ninety days after a request is decided or expires, we erase the name, e-mail and other details in it.
- **Usage analytics:** up to one year at PostHog.
- **Backups and server logs:** [Backup and server-log retention periods — to be completed]. Deleted data leaves our backups when they expire.

## Your rights

You can ask to see, correct, export or delete your personal data, or object to how it is used.

- **Workspace data:** ask your workspace admin first. Your company decides about that data, and we help it answer your request.
- **Access requests, analytics and anything else:** write to [support@eduba.ir](mailto:support@eduba.ir). We answer as soon as we can.

You can also withdraw your analytics consent at any time in **Settings → Privacy**.

## Changes to this policy

When we change this policy, we publish the new version on this page with its version number and date.

## Contact

[support@eduba.ir](mailto:support@eduba.ir)
