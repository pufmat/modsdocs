# Break Block Experience Source

Experience Source `puffish_skills:break_block` gives experience when player breaks a block. It includes blocks broken with incorrect tool.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).


## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Broken Block State

Operation `get_broken_block_state` returns `minecraft:block_state` prototype.

### Get Tool Item Stack

Operation `get_tool_item_stack` returns `minecraft:item_stack` prototype.


## Example

The following experience source gives the player exactly 5 experience every time the player breaks stone block.
::: details Click to view
```json
{
	"type": "puffish_skills:break_block",
	"data": {
		"variables": {
			"is_stone": {
				"operations": [
					{
						"type": "get_broken_block_state"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"block": "stone"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_stone",
				"expression": "5"
			}
		]
	}
}
```
:::
---
This experience source will give player 1 experience if block was destroyed with an iron shovel.
::: details Click to view
```json
{
	"type": "puffish_skills:break_block",
	"data": {
		"variables": {
			"is_shovel": {
				"operations": [
					{
						"type": "get_tool_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "iron_shovel"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_shovel",
				"expression": "1"
			}
		]
	}
}
```
:::

## JSON Structure:

### `source_data` object when `type` is `break_block`:

This experience source uses calculations. Read more about them [here](/creators/configuration/calculations/calculation).