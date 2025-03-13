# Kill Entity Experience Source

Experience Source `puffish_skills:kill_entity` gives experience when player kills entity.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).


## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Weapon Item Stack

Operation `get_weapon_item_stack` returns `minecraft:item_stack` prototype.

### Get Killed Living Entity

Operation `get_killed_living_entity` returns `minecraft:living_entity` prototype.

### Get Damage Source

Operation `get_damage_source` returns `minecraft:damage_source` prototype.

### Get Dropped Experience

Operation `get_dropped_experience` returns `puffish_skills:number` prototype which represents the amount of dropped experience.


## Examples

The following experience calculates experience based on both experience dropped by the killed entity, and it's max health. This experience source is also limited to maximum 15 kills during the time of 300 seconds.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"dropped_xp": {
				"operations": [
					{
						"type": "get_dropped_experience"
					}
				]
			},
			"max_health": {
				"operations": [
					{
						"type": "get_killed_living_entity"
					},
					{
						"type": "get_max_health"
					}
				]
			}
		},
		"experience": [
			{
				"expression": "dropped_xp + max_health / 20"
			}
		],
		"anti_farming": {
			"limit_per_chunk": 15,
			"reset_after_seconds": 300
		}
	}
}
```
:::

The following experience gives respectively 200 and 600 experience for killing Wither and Dragon.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"is_wither_boss": {
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
							"entity_type": "minecraft:wither"
						}
					}
				]
			},
			"is_dragon_boss": {
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
							"entity_type": "minecraft:ender_dragon"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_wither_boss",
				"expression": "200"
			},
			{
				"condition": "is_dragon_boss",
				"expression": "600"
			}
		]
	}
}
```
:::

## JSON Structure:

### `source_data` object when `type` is `kill_entity`:

|Property|Description|
|-|-|
|`anti_farming`|An `anti_farming` object.|

This experience source uses calculations. Read more about them [here](/creators/configuration/calculations/calculation).

### `anti_farming` object:

|Property|Description|
|-|-|
|`limit_per_chunk`|An integer. Defines how many mobs can be killed per chunk. When the limit is hit player gain no experience in that chunk.|
|`reset_after_seconds`|An integer. Defines the time after which limit should be reset.|