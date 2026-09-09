---
id: packs
slug: /packs
title: Pack management
sidebar_label: Pack management
sidebar_position: 11
description: Import and manage packs — bundles of workflows, blocks, and standards that bootstrap a domain.
sourceFiles:
  - apps/web/src/features/packs/PackImportFlow.tsx
  - apps/web/src/features/packs/PackActivationModal.tsx
sourceHash: 164bfa10039635b7321a3fc82157b0d3616113d4cc094c73cb211451fde7ac59
---

# Pack management

A **pack** (ADR-0006) is a versioned, signed bundle that ships subflow
definitions, block manifests, role definitions, and default policy rules
together, so a tenant can bootstrap a whole domain by importing one artifact
instead of building everything from scratch. `engmanager-parity-v0` — the
first pack Eduba ships — is a complete engineering-change-management setup:
subflows, blocks, roles like *Checker* and *Approver*, and starter policy
rules, plus two certified, designer-loadable workflows out of the box.

:::info Permission
Importing packs requires the **`importPack`** capability; attaching and managing
the standards they carry uses `attachStandard` and `manageStandards`. Pack
management is a tenant-admin task, held by the `workflow_admin` role.
:::

## Importing a pack

Importing walks a short wizard:

1. **Upload** the pack's signed artifact (a `pack.json` file) and choose an
   import mode:
   - **Use certified** — the tenant references the vendor's definitions
     directly; upgrades arrive later as a pack update.
   - **Fork to tenant library** — every subflow the pack ships is copied as a
     tenant-owned definition the admin manages independently.
2. **Preview** (a dry run): the platform verifies the vendor signature and
   shows what importing will do before anything is written — the policy rules
   that will be added, any that are skipped (already present) or invalid, and
   the roles the pack ships.
3. **Import** commits the preview: the pack's `defaultRules` are applied to the
   tenant's policy store additively (existing rules are never overwritten), and
   the pack becomes an *installed pack* awaiting activation.

## Finishing setup: role mapping and conflicts

An imported pack is not yet usable until it is **activated**. Activation is a
second step — either right after import, or later from the pack's own "Finish
setup" action if it was imported but never finished:

- **Role mapping.** Every role the pack ships (for example `checker`,
  `approver`) needs mapping to an existing tenant role or group before the
  pack's role-scoped rules and role-based work assignments take effect. An
  admin with `manageUsers` can **auto-create and map** every unmapped role in
  one action, or map each individually via a picker. A *required* role blocks
  activation until mapped; an *optional* role left unmapped does not block
  activation, but its rules and assignments stay silently inert until it is —
  the modal keeps a visible warning for this until it's resolved.
- **Conflict resolution.** If another installed pack already ships a block with
  the same `blockTypeId` from a different publisher or an incompatible
  version, activation is blocked until the admin picks which installed pack's
  version wins.

Once every required role is mapped and no blocking conflict remains, **Activate**
flips the install to active and its blocks, subflows, and workflows become
available in the [workflow designer](./workflow-designer.md) palette.

## How pack-applied rules show in policy

Every policy rule a pack's `defaultRules` add carries a **locked** marker:
those rows appear in [Policy rules](./policy.md)'s permission matrix with a
lock icon and cannot be toggled from there — they came from the pack, not from
a manual grant, so editing them means updating or removing the pack rather
than hand-editing a cell. A tenant remains free to add its *own* rules
alongside a pack's, including a narrower deny (ADR-0005's deny-wins).

## Updating and removing packs

Each pack version ships a changelog naming breaking changes (removed blocks,
renamed ports). The platform tracks a compatibility matrix of pack version ×
block version combinations that have been tested together, and a tenant is
notified when a newer pack version is available and whether upgrading needs a
definition migration action. Multiple packs may be installed at once; the
platform detects `blockTypeId` conflicts between them at import/activation
time rather than at run time.

## Commercial tiers

A pack import also interacts with the tenant's commercial tier (ADR-0006 §4):
Starter tenants may import from the pack library but not fork or author custom
subflows; Professional adds the full library, tenant subflows, and forking;
Enterprise removes the published-workflow cap and allows custom SDK blocks. A
create/publish call that would exceed the tier's cap fails with `tier_limit_exceeded`;
runs already in flight always complete regardless of a later downgrade.

## Related

- [Policy rules](./policy.md) — pack-applied rules show here as locked grants.
- [Workflow designer](./workflow-designer.md) — using the workflows a pack provides.
- [Roles and org chart](./roles-org.md) — mapping a pack's roles to your tenant.
