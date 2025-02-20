# Test Stat Operation

Converts [`minecraft:stat` prototype](/creators/configuration/calculations/prototypes/built-in/stat) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given stat.

## Examples

The operation is used to test stat kind, such that the experience source gives the player exactly 5 experience every time the player jumps.
::: details Click to view
```json
{
	"type": "puffish_skills:mine_block",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "get_stat"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"stat": "minecraft.custom:minecraft.jump"
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
|`stat`|[stat identifier](https://minecraft.wiki/w/Statistics)|yes|