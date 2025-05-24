# Fish Item Experience Source

Experience Source `puffish_skills:fish_item` gives experience when player fishes an item.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

> [!IMPORTANT]
> This experience source is evaluated for each fished item. It is not executed when no item is fished.

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Rod Item Stack

Operation `get_rod_item_stack` returns `minecraft:item_stack` prototype.

### Get Fished Item Stack

Operation `get_fished_item_stack` returns `minecraft:item_stack` prototype.


## Example

The following experience source gives the player exactly 5 experience every time the player catches a fish.
::: details Click to view
```json
{
	"type": "puffish_skills:fish_item",
	"data": {
		"variables": {
			"is_fish": {
				"operations": [
					{
						"type": "get_fished_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "#fishes"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_fish",
				"expression": "5"
			}
		]
	}
}
```
:::
---
This experience source gives the player 1 experience when the player catches a pufferfish.
::: details Click to view
```json
{
	"type": "puffish_skills:fish_item",
	"data": {
		"variables": {
			"is_pufferfish": {
				"operations": [
					{
						"type": "get_fished_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "pufferfish"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_pufferfish",
				"expression": "1"
			}
		]
	}
}
```
:::