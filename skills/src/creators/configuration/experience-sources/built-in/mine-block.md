# Mine Block Experience Source

Experience Source `puffish_skills:mine_block` gives experience when player mines a block. It only includes blocks mined with correct tool.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).


## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Mined Block State

Operation `get_mined_block_state` returns `minecraft:block_state` prototype.

### Get Tool Item Stack

Operation `get_tool_item_stack` returns `minecraft:item_stack` prototype.


## Example

The following experience source gives the player exactly 5 experience every time the player mines stone block.
::: details Click to view
```json
{
	"type": "puffish_skills:mine_block",
	"data": {
		"variables": {
			"is_stone": {
				"operations": [
					{
						"type": "get_mined_block_state"
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

## JSON Structure:

### `source_data` object when `type` is `mine_block`:

This experience source uses calculations. Read more about them [here](/creators/configuration/calculations/calculation).