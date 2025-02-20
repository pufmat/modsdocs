# File `definitions.json`

This config is used to create skill definitions to use them as templates in skills config. It is located in the `definitions.json` file inside each category folder.

## Properties

Each property is the definition ID and the value is the [`definition`](/creators/configuration/definitions) object.

## Example

The following definition describes a skill that after unlocking gives a player one more hearth (2 health points).

```json
{
	...
	"health+2": {
		"title": "+1 Heart",
		"icon": {
			"type": "effect",
			"data": {
				"effect": "health_boost"
			}
		},
		"rewards": [
			{
				"type": "puffish_skills:attribute",
				"data": {
					"attribute": "generic.max_health",
					"value": 2,
					"operation": "addition"
				}
			}
		]
	}
	...
}
```

## JSON Structure

An object of `definition` objects, where each key is a definition ID.