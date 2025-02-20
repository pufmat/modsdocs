# Test Damage Type Operation

Converts [`minecraft:damage_type` prototype](/creators/configuration/calculations/prototypes/built-in/damage-type) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given damage type.

## Examples

The operation is used to test damage type, such that the experience source gives the player exactly 5 experience every time the player kills entity with projectile damage type.
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
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"damage_type": "#is_projectile"
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
|`damage_type`|[damage identifier](https://minecraft.wiki/w/Damage_type) or [damage tag](https://minecraft.wiki/w/Tag#Damage_types)|yes|