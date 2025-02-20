# Get Stat Value Operation

Converts [`minecraft:player` prototype](/creators/configuration/calculations/prototypes/built-in/living-entity) into [`puffish_skills:number` prototype](/creators/configuration/calculations/prototypes/built-in/number) such that it represents a value from a given statistic of the player.

# Examples

The operation is used to get value from the `minecraft.killed:minecraft.zombie` statistic of the player. It is then used to decrase experience given for killing zombies, depending on the count of killed zombies.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"is_zombie": {
				"operations": [
					{
						"type": "get_killed_living_entity"
					},
					{
						"type": "get_type"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"entity_type": "minecraft:zombie"
						}
					}
				]
			},
			"zombie_kills": {
				"operations": [
					{
						"type": "get_player"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:get_stat_value",
						"data": {
							"stat": "minecraft.killed:minecraft.zombie"
						}
					}
				],
			}
		},
		"experience": {
			"condition": "is_zombie",
			"experience": "100 / zombie_kills"
		}
	}
}
```
:::

## JSON structure

|Property|Type|Required|
|-|-|-|
|`stat`|[stat identifier](https://minecraft.wiki/w/Statistics)|yes|