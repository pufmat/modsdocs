# Deal Damage Experience Source

Experience Source `puffish_skills:deal_damage` gives experience when player deals damage to the other entity.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).


## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Weapon Item Stack

Operation `get_weapon_item_stack` returns `minecraft:item_stack` prototype.

### Get Damaged Living Entity

Operation `get_damaged_living_entity` returns `minecraft:living_entity` prototype.

### Get Dealt Damage

Operation `get_dealt_damage` returns `puffish_skills:number` prototype which represents the amount of dealt damage.

### Get Damage Source

Operation `get_damage_source` returns `minecraft:damage_source` prototype.


## Example

The following experience source gives a player experience value equal to 25% of damage dealth.
::: details Click to view
```json
{
	"type": "puffish_skills:deal_damage",
	"data": {
		"variables": {
			"damage": {
				"operations": [
					{
						"type": "get_dealt_damage"
					}
				]
			}
		},
		"experience": "damage * 0.25"
	}
}
```
:::
---
This experience source gives player 10 experience if an entity is killed with a Diamond Sword.
::: details Click to view
```json
{
	"type": "puffish_skills:deal_damage",
	"data": {
		"variables": {
			"damage": {
				"operations": [
					{
						"type": "get_weapon_item_stack"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"item": "diamond_sword"
						}
					}
				]
			}
		},
		"experience": "10"
	}
}
```
:::