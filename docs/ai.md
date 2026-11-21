---
id: ai
slug: /ai
title: AI workflow assistant
sidebar_label: AI assistant
sidebar_position: 13
description: Configure AI and use it to draft and explain workflows.
---

# AI workflow assistant

The workflow designer's AI assistant can draft a workflow from a process description, revise a proposed draft, or explain the current diagram. AI availability depends on the workspace's plan, permissions, and configuration. An administrator must enable it; a model must be configured in the workspace or inherited from the platform.

## Configure AI

An authorized workspace administrator opens **Settings → AI assistant**, enables the assistant, selects a model or the platform default, supplies the provider settings required for that model, and saves. A self-hosted Ollama configuration requires its base URL. Saved API keys are not shown again; leave a saved key field blank to keep it. For platform defaults, see [App admin](./app-admin.md).

## Draft a workflow

1. Open a workflow draft in the [designer](./workflow-designer.md) and open the AI assistant.
2. Describe the process and select **Generate draft**. The result appears on the canvas as an unsaved AI draft.
3. Review the proposed steps, assignments and reported issues. Use **Modify** to request changes, or **Discard** to remove the suggestion.
4. Accept the draft when it is suitable. Validate and publish it through the normal workflow controls; accepting does not publish it.

Use **Explain this workflow** to request a plain-language explanation of the current diagram. Check generated content carefully: the assistant can misunderstand the process, and the designer's validation does not replace review of business rules and access. If the assistant is unavailable, check the plan, enablement, provider configuration, and your access with an administrator.
