# File `skills.json`

This config is used to define skills and their positions. It is located in the `skills.json` file inside each category folder.

::: warning
It is recommended to not edit this file by manually. Use [editor](/creators/editor) instead.
:::

## Properties

Each property is the skill ID and the value is the [`skill`](/creators/configuration/skills) object.

## Example

```json
{
	...
	"skill_1": {
		"x": 0,
		"y": 32,
		"definition": "definition_1",
		"root": true
	},
	"skill_2": {
		"x": 64,
		"y": 16,
		"definition": "definition_2",
		"root": true
	},
	"skill_3": {
		"x": -16,
		"y": 0,
		"definition": "definition_2"
	}
	...
}
```

## JSON Structure

An object of `skill` objects, where each key is a skill ID.