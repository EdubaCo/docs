---
id: subflow-library
slug: /subflow-library
title: Subflow library
sidebar_label: Subflow library
sidebar_position: 7
description: Create and reuse workflow fragments with explicit inputs and outputs.
---

# Subflow library

A subflow is a reusable workflow fragment. Use the library to browse certified, organization-owned, and imported subflows. Certified subflows are read-only; create an editable organization-owned copy with **Fork**. Designing requires `designWorkflow`; publishing also requires `publishDefinition`.

## Create and publish a subflow

1. Open **Subflows** and select **New subflow**. Enter a name and create it to open the draft editor.
2. Add and connect the steps on the canvas. Subflows cannot contain another subflow.
3. In **Interface**, declare any input and output ports, their types, and cardinality. Connect each input to a consuming step and each output to the step that produces it.
4. Save and validate the draft. Resolve reported configuration, connection, and interface errors, then publish it.

A published revision is read-only. Select **Edit** to start a new draft; publishing validates it again. Deprecating a subflow hides it from the designer palette while retaining its history.

## Reuse and update a reference

In the [workflow designer](./workflow-designer.md), add a published subflow from the palette and map its inputs to earlier outputs. Published workflows refer to a specific revision. To use a newer revision, use the reference upgrade action, review interface changes, and map any affected ports before applying it. The change creates a workflow draft; publish that draft to make it available. Existing runs retain their pinned revision.

A fork is independent of the original pack and does not automatically receive its updates. See [Packs](./packs.md) for importing and activating packaged content.
