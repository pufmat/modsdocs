# Test Entity Type Operation

Converts [`minecraft:entity_type` prototype](/creators/configuration/calculations/prototypes/built-in/entity-type) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given entity.

> [!INFO]
> If you also want to test for entity NBT use [Test Entity Operation](/creators/configuration/calculations/operations/built-in/test-entity).

## Examples

The operation is used to test entity type, such that the experience source gives the player exactly 5 experience every time the player kills zombie entity.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"exp_value": {
				"operations": [
					{
						"type": "killed_living_entity"
					},
					{
						"type": "type"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"entity_type": "zombie"
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

The operation is used to test entity type tag, such that the experience source gives the player exactly 5 experience every time the player kills any entity with type tag `undead`.
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
						"type": "get_type"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:test",
						"data": {
							"entity_type": "#undead"
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
|`entity_type`|[entity identifier](https://minecraft.wiki/w/Entity#Types_of_entities) or [entity tag](https://minecraft.wiki/w/Entity_type_tag_(Java_Edition))|yes|