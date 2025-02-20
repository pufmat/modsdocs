# Test Item Operation

Converts [`minecraft:item` prototype](/creators/configuration/calculations/prototypes/built-in/item) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given item.

## Examples

The operation is used to test item kind, such that the experience source gives the player exactly 5 experience every time the player mines a block using golden pickaxe.
::: details Click to view
```json
{
	"type": "puffish_skills:mine_block",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "get_tool_item_stack"
					},
					{
						"type": "get_item"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"item": "golden_pickaxe"
						}
					},
					{
						"type": "switch",
						"data": {
							"true": 5,
							"false": 0
						}
					}
				]
			}
		},
		"experience": "exp_value"
	}
}
```
:::

## JSON structure

|Property|Type|Required|
|-|-|-|
|`item`|[item identifier](https://minecraft.wiki/w/Java_Edition_data_values#Items) or [item tag](https://minecraft.wiki/w/Tag#Items)|no|