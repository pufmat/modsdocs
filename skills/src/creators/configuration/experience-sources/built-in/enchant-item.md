# Enchant Item Experience Source

Experience Source `puffish_skills:enchant_item` gives experience when player enchants an item.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Enchanted Item Stack

Operation `get_enchanted_item_stack` returns `minecraft:item_stack` prototype.

### Get Levels

Operation `get_levels` returns `puffish_skills:number` prototype which represents the amount levels spent by the player on enchanting.


## Examples

The following experience source gives the player exactly 5 experience every time the player enchants a book.
::: details Click to view
```json
{
	"type": "puffish_skills:enchant_item",
	"data": {
		"variables": {
			"is_book": {
				"operations": [
					{
						"type": "get_enchanted_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "enchanted_book"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_book",
				"expression": "5"
			}
		]
	}
}
```
:::

The following experience source gives the player experience every time the player enchants an item. The amount of experience is equal to twice the amount of levels spent by the player on enchanting.
::: details Click to view
```json
{
	"type": "puffish_skills:enchant_item",
	"data": {
		"variables": {
			"levels": {
				"operations": [
					{
						"type": "get_levels"
					}
				]
			}
		},
		"experience": "2 * levels"
	}
}
```
:::
