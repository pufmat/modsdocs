# Get Attribute Operation

Converts [`minecraft:living_entity` prototype](/creators/configuration/calculations/prototypes/built-in/living-entity) into [`minecraft:entity_attribute_instance` prototype](/creators/configuration/calculations/prototypes/built-in/entity-attribute-instance) such that it represents the instance of given attribute. If the target has no attribute returns nothing.

### Properties

#### Attribute

Property `attribute` defines an [Attribute](https://minecraft.wiki/w/Attribute). The operation will return [`minecraft:entity_attribute_instance`](/creators/configuration/calculations/prototypes/built-in/entity-attribute-instance) of this attribute from the living entity.

# Examples

The operation is used to get attribute `generic.luck` on the player and then the value of it, such that the experience source gives extra experience every time player kill entity.
::: details Click to view
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"variables": {
			"luck_value": {
				"operations": [
					{
						"type": "get_player"
					},
					{
						"type": "as_living_entity"
					},
					{ // [!code focus:6]
						"type": "puffish_skills:attribute",
						"data": {
							"effect": "generic.luck"
						}
					},
					{
						"type": "get_value"
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
		"experience": "dropped_experience + luck_value * dropped_experience"
	}
}
```
:::

## JSON structure

|Property|Type|Required|
|-|-|-|
|`attribute`|[attribute identifier](https://minecraft.wiki/w/Attribute)|yes|