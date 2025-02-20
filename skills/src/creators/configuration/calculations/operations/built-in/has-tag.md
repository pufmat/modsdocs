# Has Tag Operation

Converts [`minecraft:entity` prototype](/creators/configuration/calculations/prototypes/built-in/entity) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the entity has given tag.

## Examples

The operation is used to test entity tag, such that the experience source gives the player exactly 5 experience every time the player kills any entity with has tag `example`.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "get_killed_living_entity"
					},
					{
						"type": "as_entity"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:has_tag",
						"data": {
							"tag": "example"
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