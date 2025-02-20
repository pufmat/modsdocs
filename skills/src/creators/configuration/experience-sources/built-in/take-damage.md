# Take Damage Experience Source

Experience Source `puffish_skills:take_damage` gives experience when player takes damage.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).


## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Weapon Item Stack

Operation `get_weapon_item_stack` returns `minecraft:item_stack` prototype.

### Get Taken Damage

Operation `get_taken_damage` returns `puffish_skills:number` prototype which represents the amount of taken damage.

### Get Damage Source

Operation `get_damage_source` returns `minecraft:damage_source` prototype.


## Example

The following experience source gives a player experience value equal to 25% of damage taken.
::: details Click to view
```json
{
	"type": "puffish_skills:take_damage",
	"data": {
		"variables": {
			"damage": {
				"operations": [
					{
						"type": "get_taken_damage"
					}
				]
			}
		},
		"experience": "damage * 0.25"
	}
}
```
:::