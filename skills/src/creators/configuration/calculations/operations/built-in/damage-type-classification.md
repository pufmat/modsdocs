# Damage Type Classification

## Operations

### Is Melee

Converts [`minecraft:damage_type` prototype](/creators/configuration/calculations/prototypes/built-in/damage-type) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the damage type is considered melee.

### Is Projectile

Converts [`minecraft:damage_type` prototype](/creators/configuration/calculations/prototypes/built-in/damage-type) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the damage type is considered projectile.

### Is Magic

Converts [`minecraft:damage_type` prototype](/creators/configuration/calculations/prototypes/built-in/damage-type) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the damage type is considered magic.

## Examples

The operation is used to classify damage type, such that the experience source gives the player exactly 5 experience every time the player kills entity with damage type that is considered magic.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "get_damage_source"
					},
					{
						"type": "get_type"
					},
					{ // [!code focus:3]
						"type": "puffish_skills:is_magic",
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