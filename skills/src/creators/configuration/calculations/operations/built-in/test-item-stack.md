# Test Item Stack Operation

Converts [`minecraft:item_stack` prototype](/creators/configuration/calculations/prototypes/built-in/item-stack) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given item stack.

## Examples

The operation is used to test item stack kind, such that the experience source gives the player exactly 5 experience every time the player mines a block using golden pickaxe.
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

The operation is used to test if item stack is enchanted with silk touch. This information is then used such that the experience source gives the player exactly 5 experience every time the player mines a block unless the tool is enchanted with silk touch.
::: details Click to view
```json
{
	"type": "puffish_skills:mine_block",
	"data": {
		"variables": {
			"is_silk_touch": {
				"operations": [
					{
						"type": "get_tool_item_stack"
					},
					{ // [!code focus:10]
						"type": "puffish_skills:test",
						"data": {
							"components": {
								"minecraft:enchantments": {
									"minecraft:silk_touch": 1
								}
							}
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "!is_silk_touch",
				"expression": "5"
			}
		]
	}
}
```
:::

## JSON structure

|Property|Type|Required|
|-|-|-|
|`item`|[item identifier](https://minecraft.wiki/w/Java_Edition_data_values#Items) or [item tag](https://minecraft.wiki/w/Tag#Items)|no|
|`nbt`|[item nbt](https://minecraft.wiki/w/NBT_format)|no|
|`components`|[data component predicate](https://minecraft.wiki/w/Data_component_predicate)|no|