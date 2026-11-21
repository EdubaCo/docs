---
id: groups
slug: /groups
title: User groups
sidebar_label: User groups
sidebar_position: 10
description: Manage groups of users for assignment and notifications.
---

# User groups

A user group is a maintained set of workspace members. It can be selected for work assignment and notification targeting. Groups are distinct from roles: membership in a group does not by itself grant the role permissions described in [Roles and org chart](./roles-org.md). A group assignment is resolved against active members and access policy.

## Create and maintain a group

Managing groups requires the `manageUsers` capability.

1. Open **Settings → User groups** and select **Add group**.
2. Enter a unique name and, optionally, a description. Save the group.
3. Open the group's actions, choose **Manage members**, select its members, and save.
4. Use the same actions menu to edit the details or delete the group. Deleting removes the group and clears its membership; it cannot be undone.

To route work to a group, select it in an available assignment picker or configure the workflow step accordingly. Members who can act see the work according to the applicable assignment and access rules; see [My Work](./my-work.md). If a group or action is unavailable, ask a workspace administrator to check membership and permissions.
