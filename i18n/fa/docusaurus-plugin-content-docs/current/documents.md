---
id: documents
slug: /documents
title: Documents
sidebar_label: Documents
sidebar_position: 10
description: Upload, share, and track the files attached to your projects and tasks — folders, revisions, sharing, and attestation.
---

:::note ترجمه در حال انجام
این صفحه هنوز ترجمه نشده است، بنابراین محتوای آن به انگلیسی نمایش داده می‌شود. ترجمهٔ کامل در مرحله‌ای بعد افزوده می‌شود (ADR-0014 §6).
:::

# Documents

The **Documents** screen is where a project's files live: specs and drawings
handed in as project inputs, the working files a task produces, and the
packaged deliverables a run hands off. Every write creates a new, immutable
**revision** — nothing is ever overwritten — and every read and write is
gated by the [policy engine](./policy.md) (ADR-0005 §4), so what you can see
and touch here always matches what you can see and touch from a task.

:::info Permission
There is no single capability that gates this screen — access is computed per
document from your participation in the project or task it belongs to (a
project member, or a task's creator/responsible/reviewer), plus whether the
document has passed **AFC** (Approved For Construction), after which further
writes are locked. See [Policy rules](./policy.md).
:::

## Folders

Documents are organized into four folder kinds, switchable from the screen's
folder filter:

| Folder | What lives there |
| --- | --- |
| **Documents** | The default folder — project inputs and general files. |
| **Attachments** | Supporting files attached along the way. |
| **Deliverables** | Packaged, issued outputs — e.g. a run's transmittal package. |
| **Shared** | Files exposed through a share link (see below). |

The screen can be scoped to one project or shown tenant-wide, and a project's
own task-scoped documents (the working files behind each of its tasks) list
alongside its project-level inputs so issued deliverables stay visible without
mixing working files into the project set.

## Uploading and revisions

**+ Upload** creates a brand-new document at a chosen key; **New revision** on
an existing row adds a new revision to it. Both use the same two-phase flow —
request an upload handle, transfer the bytes, then finalize — and both
affordances are hidden entirely for a document you may not write to, not
merely disabled: what you see already reflects what the policy gate will
allow, so there is no upload-then-403 surprise.

**Revision history** opens every finalized revision of a document, newest
first, each tagged by its **source** — `upload` (a person uploaded it),
`email` (arrived through inbound email), `attest` (see below), or `generated`
(produced by the workflow) — with its author, date, and size. The current
`latest` is marked; older revisions are download-only. Nothing here is ever
edited or deleted — a correction is always a new revision.

## Task documents and lineage

A task's documents are its own copies, not references to the project's
originals — editing a task's working file never touches the project input it
was handed off from. A document handed off from the project into a task
carries a **lineage badge** back to its source; one revised during the run is
marked as modified. This is what lets ten tasks share the same project input
and each end up with its own, independently-revised copy. Only the holder of
a task's currently **open** step may add or revise that task's own documents
— whatever role they hold — and that write access closes the moment their
step is submitted and the wait moves on.

## Sharing

**Share** mints a link to a document that expires after a chosen period,
without requiring the recipient to have an Eduba account. A link can be
revoked at any time, which immediately invalidates it. Share is only offered
on a document you may already read.

## Attestation

**Attest** lets a participant re-affirm that a document's current latest bytes
are still current — no new upload, just a lightweight confirmation. This
records a new revision tagged `attest` with the confirming person as attester,
which is how Eduba captures "user U confirmed latest input on date D" for
inputs that arrive outside the platform (a customer's emailed drawing, for
example) rather than through a direct upload.

## Storage

Where the bytes actually live is a tenant setting, not something this screen
exposes: **Settings → Storage** lets a tenant admin point document storage at
either Eduba's platform-managed bucket or their own S3-compatible endpoint
("bring your own storage"). Either way, every document write still goes
through the same storage policy gate and produces the same immutable revision
history — switching storage backends changes where bytes are kept, not the
access rules that govern them.

## Related

- [Policy rules](./policy.md) — the read/write grants that decide what you can
  open and change here.
- [Task detail](./task-detail.md) — the Files tab, where a task's own
  documents are worked day to day.
- [Projects](./projects.md) — the project a document's inputs and
  deliverables belong to.
