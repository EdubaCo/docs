---
id: inbound-email
slug: /inbound-email
title: Inbound email
sidebar_label: Inbound email
sidebar_position: 11.7
description: How emailed attachments become document revisions and how operators review, retry, or dismiss parked messages.
---

# Inbound email

Eduba's inbound email connector turns emailed attachments into versioned
document revisions (tagged with source `email` in [Documents](./documents.md))
through the same storage policy gate as direct uploads. Messages that cannot be
routed automatically are not dropped — they are held in the **Parked inbound
email** queue for an operator to review.

:::info Permission
Viewing, retrying, and dismissing parked inbound messages require the
**`manageEmailIngest`** capability (granted to `tenant_admin` by default). See
[Policy rules](./policy.md).
:::

## Why messages are parked

An incoming email lands in the parked queue when the connector cannot safely
turn it into a document revision, for example:

- **Unroutable** — the message does not match a known project, task, or
  document routing rule.
- **No attachment** — the message arrived without a file to ingest.
- **Policy denied** — the storage policy gate rejected the write (for example
  because the target document is AFC-locked or lacks an eligible scope).
- **Unknown address** — the message went to a `+tag` of a connector's mailbox
  address that matches no machine user, such as a mistyped tag.
- **Bounce or automatic reply** — a delivery failure notice or an out-of-office
  reply. Eduba never answers these.

## Reviewing the parked queue

Open **Settings → Email & inbox** to see all parked messages for your
workspace, newest first. Each row displays:

| Column | Details |
| --- | --- |
| **From** | The sender address (or *Unknown sender* if missing). |
| **Subject** | The email subject and its unique message ID. |
| **Connector** | The [connector](./storage-and-connectors.md#email-connectors) that received the message, or *Default mailbox* for the mailbox in Email settings. |
| **Received** | Timestamp when the message arrived. |
| **Park reason** | Why automatic ingestion could not complete. |

## Retrying or dismissing a message

- **Retry** — re-fetches the original message and runs ingestion again. Use this
  after fixing the routing rule, project setup, or document state. If ingestion
  succeeds, the attachments are written as `email` revisions and the row leaves
  the parked list. If the original message bytes are no longer available from
  the mail server, the retry fails and the row stays parked. A message from a
  connector is read again from that connector's mailbox, so it cannot be retried
  while the connector is paused or after it is deleted.
- **Dismiss** — marks the parked row as acknowledged so it drops off the queue
  without ingesting anything. Use this for noise, duplicates, or messages that
  were already handled manually.

Every retry and dismiss action is recorded in the workspace audit log.

## Related

- [Documents](./documents.md) — viewing `email`-sourced revisions and revision history.
- [Settings](./settings.md) — workspace administration and audit logs.
- [Policy rules](./policy.md) — granting `manageEmailIngest`.
