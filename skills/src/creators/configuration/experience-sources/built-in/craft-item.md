# Craft Item Experience Source

Experience Source `puffish_skills:craft_item` gives experience when player crafts an item.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Crafted Item Stack

Operation `get_crafted_item_stack` returns `minecraft:item_stack` prototype.


## Example

The following experience source gives the player exactly 5 experience every time the player crafts an iron sword.
::: details Click to view
```json
{
	"type": "puffish_skills:craft_item",
	"data": {
		"variables": {
			"is_iron_sword": {
				"operations": [
					{
						"type": "get_crafted_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "minecraft:iron_sword"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_iron_sword",
				"expression": "5"
			}
		]
	}
}
```
:::
---
This experience source will give 3 experience to player when bread is crafted.
::: details Click to view
```json
{
	"type": "puffish_skills:craft_item",
	"data": {
		"variables": {
			"is_bread": {
				"operations": [
					{
						"type": "get_crafted_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "minecraft:bread"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_bread",
				"expression": "3"
			}
		]
	}
}
```
:::