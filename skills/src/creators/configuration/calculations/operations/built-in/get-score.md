# Get Score Operation

Converts [`minecraft:living_entity` prototype](/creators/configuration/calculations/prototypes/built-in/living-entity) into [`puffish_skills:number` prototype](/creators/configuration/calculations/prototypes/built-in/number) such that it represents the score of the living entity in the given objective scoreboard.

# Examples

The operation is used to get score of the player from the `example` objective scoreboard, such that the experience source gives more experience depending on the score.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"score": {
				"operations": [
					{
						"type": "get_player"
					},
					{
						"type": "as_entity"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:get_score",
						"data": {
							"objective": "example"
						}
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
		"experience": "dropped_experience * score*"
	}
}
```
:::

## JSON structure

|Property|Type|Required|
|-|-|-|
|`effect`|[effect identifier](https://minecraft.wiki/w/Effect)|yes|