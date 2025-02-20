# Test Block Operation

Converts [`minecraft:block_state` prototype](/creators/configuration/calculations/prototypes/built-in/block-state) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given block.

## Examples

The operation is used to test block kind, such that the experience source gives the player exactly 5 experience every time the the player mines stone block.
::: details Click to view
```json
{
	"type": "puffish_skills:mine_block",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "get_mined_block_state"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"block": "stone"
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

The operation is used to test block tag, such that the experience source gives the player exactly 5 experience every time the the player mines any oak log.
::: details Click to view
```json
{
	"type": "puffish_skills:mine_block",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "mined_block_state"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"block": "#logs"
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
|`block`|[block identifier](https://minecraft.wiki/w/Java_Edition_data_values#Blocks) or [block tag](https://minecraft.wiki/w/Tag#Blocks)|no|
|`state`|[block state](https://minecraft.wiki/w/Block_states)|no|