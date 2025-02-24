# Test World Operation

Converts [`minecraft:world` prototype](/creators/configuration/calculations/prototypes/built-in/world) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given world.

## Examples

The operation is used to test dimension, such that the experience source gives the player exactly 5 experience every time the player kills entity in the nether.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"is_nether": {
				"operations": [
					{
						"type": "get_player"
					},
					{
						"type": "get_world"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"dimension": "minecraft:the_nether"
						}
					}

				]
			}
		},
		"experience": [
			{
				"condition": "is_nether",
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
|`dimension`|dimension identifier|yes|