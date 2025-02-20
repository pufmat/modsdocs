# Eat Food Experience Source

Experience Source `puffish_skills:eat_food` gives experience when player eats an item.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Eaten Item Stack

Operation `get_eaten_item_stack` returns `minecraft:item_stack` prototype.


## Example

The following experience source gives the player exactly 5 experience every time the player eats bread.
::: details Click to view
```json
{
	"type": "puffish_skills:eat_food",
	"data": {
		"variables": {
			"is_bread": {
				"operations": [
					{
						"type": "get_eaten_item_stack"
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
				"expression": "5"
			}
		]
	}
}
```
:::
