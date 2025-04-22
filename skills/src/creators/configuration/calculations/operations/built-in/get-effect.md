# Get Effect Operation

Converts [`minecraft:living_entity` prototype](/creators/configuration/calculations/prototypes/built-in/living-entity) into [`minecraft:status_effect_instance` prototype](/creators/configuration/calculations/prototypes/built-in/status-effect-instance) such that it represents the instance of given effect. If the target has no effect returns nothing.

# Examples

The operation is used to get effect `luck` on the player and then the level of it, such that the experience source gives extra experience every time player kill entity.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"luck_level": {
				"operations": [
					{
						"type": "get_player"
					},
					{
						"type": "as_living_entity"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:get_effect",
						"data": {
							"effect": "luck"
						}
					},
					{
						"type": "get_level"
					}
				],
				"fallback": 0
			},
			"dropped_experience": {
				"operations": [
					{
						"type": "get_dropped_experience"
					}
				]
			},
		},
		"experience": "dropped_experience + luck_level * dropped_experience"
	}
}
```
:::

## JSON structure

|Property|Type|Required|
|-|-|-|
|`effect`|[effect identifier](https://minecraft.wiki/w/Effect)|yes|