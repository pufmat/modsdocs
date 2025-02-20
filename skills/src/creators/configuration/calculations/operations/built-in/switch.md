# Switch operation

Converts [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) into different [`puffish_skills:number` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the value is `true` or `false`.

## Examples

The following example switch operation is used in the experience source to give the player exacly 5 experience every time the player mines stone block.
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
					{
						"type": "puffish_skills:test",
						"data": {
							"block": "stone"
						}
					},
					{ // [!code focus:7]
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
|`true`|number|yes|
|`false`|number|yes|