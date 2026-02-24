# Smelt Item Experience Source

Experience Source `puffish_skills:smelt_item` gives experience when player smelts an item.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Smelted Item Stack

Operation `get_smelted_item_stack` returns `minecraft:item_stack` prototype.


## Example

The following experience source gives the player exactly 5 experience every time the player smelts an iron ingot.
::: details Click to view
```json
{
	"type": "puffish_skills:smelt_item",
	"data": {
		"variables": {
			"is_iron_ingot": {
				"operations": [
					{
						"type": "get_smelted_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "minecraft:iron_ingot"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_iron_ingot",
				"expression": "5"
			}
		]
	}
}
```
:::