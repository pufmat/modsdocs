# File `connections.json`

This config is used to define connections between skills. It is located in the `connections.json` file inside each category folder.

::: warning
It is recommended to not edit this file by manually. Use [editor](/creators/editor) instead.
:::

> [!CAUTION]
> This page is outdated.

## JSON Structure

### `connections.json`

An array of `pair` elements.

### `pair` array

An array of 2 strings. Each string is a skill id from `skills.json`.

## Example

```json
[
	["skill_1", "skill_2"],
	["skill_3", "skill_1"]
]
```