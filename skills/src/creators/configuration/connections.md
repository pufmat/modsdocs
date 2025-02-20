# Connections

This config is used to define connections between skills.

::: warning
It is recommended not to edit this piece of configuration manually. Use [editor](/creators/editor) instead.
:::

## Connection Types

There are two types of connections:

- [Normal Connections](#normal-connections)
- [Exclusive Connections](#exclusive-connections)

### Normal Connections {#normal-connections}

Normal connections are used to make skills available to unlock after the other is unlocked. Skill becomes available to unlock when at least one of the connections leads from the unlocked skill.

### Exclusive Connections {#exclusive-connections}

Exclusive connections are used to permanently exclude skills. They can be used to create groups of mutually exclusive skills, so when one of them is unlocked then other ones became excluded.

Special attention should be made when using this type of connection as it can easily cause unexpected problem. Note that it is only possible to connect two skills at a time.

In order to properly create a groups of mutually exclusive skills, all skills in that group must be connected to each other. In can be easily done in the editor by selecting all skills that are suppose to be in a group and then pressing <kbd>Shift</kbd>+<kbd>C</kbd>.