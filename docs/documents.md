---
id: documents
slug: /documents
title: Documents
sidebar_label: Documents
sidebar_position: 10
description: Upload, share, and track the files attached to your projects and tasks — folders, revisions, sharing, and attestation.
sourceFiles:
  - apps/web/src/features/documents/DocumentsPage.tsx
  - apps/api/src/routes/documents.ts
  - apps/api/src/routes/task-documents.ts
sourceHash: c6673951263185705796e688bb6abf60a5b322133777d379ddb76a3f7c54dacd
---

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
| **Shared** | Documents in the shared folder category. Creating a share link is a separate action. |

The screen can be scoped to one project or shown tenant-wide, and a project's
own task-scoped documents (the working files behind each of its tasks) list
alongside its project-level inputs so issued deliverables stay visible without
mixing working files into the project set.

## Uploading and revisions

To upload a new document, choose **Upload**, enter its document path, select a file, and submit. To update an existing document, choose **New revision** on its row, select the file, and submit. Individual files are capped at 100 MB, and uploads are checked against your workspace's managed storage and database plan quotas. Wait for the upload to finish; if it fails, retry and check your access, file size, and available quota. For an AFC-locked document, ask the responsible administrator about the customer revision reset before trying to add a revision.

Documents issued through a project's revision series display their issued revision label alongside the numeric revision. When a project input receives a newer revision while tasks are still working off an earlier one, its row shows a stale-input hint and offers **Apply customer revision** directly (see [Projects](./projects.md)).

## Viewing files in the browser

Select **View** on any readable document to open it in Eduba's built-in viewer without downloading:

- **PDF** (`.pdf`) — page navigation, outline, zoom, rotation, and in-document search.
- **Office documents** (`.docx`, `.xlsx`, `.csv`, `.pptx`).
- **Text and code** (`.txt`, `.log`, `.md`, `.json`, `.xml`).
- **Images** (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.svg`).

In-browser preview supports files up to 50 MB; larger files or unsupported file types remain available via **Download**.

To share a readable document, choose **Share**, select an expiry period, create and copy the link. Use **Revoke** if it should stop working before expiry. Treat the link as access to the document and share it only with intended recipients.

Upload and revision actions depend on your access. Permissions or document state can change while you work, so the server checks access again when processing a request.

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
- [Projects](./projects.md) — the project a document's inputs, deliverables, and
  customer revision resets belong to.
- [Inbound email](./inbound-email.md) — how emailed attachments arrive as
  `email` revisions and how parked messages are handled.
