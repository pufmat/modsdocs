# File `experience.json`

This config is used to define experience behavior such as how much experience is required to level up or how experience can be gained. It is located in the `experience.json` file inside each category folder. This file is optional, and if it is absent then experience is not enabled for this category.

This is probably the most complex part of configuration.

## Example

```json
{
	"experience_per_level": {
		"type": "expression",
		"data": {
			"expression": "min(level ^ 1.432 + 10, 200)"
		}
	},
	"sources": [
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
				"experience": "dropped_xp + max_health / 20",
				"anti_farming": {
					"limit_per_chunk": 15,
					"reset_after_seconds": 300
				}
			}
		}
	]
}
```

## JSON Structure

|Property|Description|
|-|-|
|`level_limit`|An integer. Defines the maximum level a player can reach.|
|`experience_per_level`|An 'experience_per_level' object. Defines how much experience is needed to level up and gain point.|
|`sources`|An array of `source` objects.|

### `experience_per_level` object

|Property|Description|
|-|-|
|`type`|A string. Defines the type of the experience per level. Allowed values are `values`, `expression`|
|`data`|An `experience_per_level_data` element.|

### `experience_per_level_data` object when `type` is `values`

|Property|Description|
|-|-|
|`values`|An array of integers. Each value defines experience needed for each level.|

### `experience_per_level_data` object when `type` is `expression`

|Property|Description|
|-|-|
|`expression`|An `expression` string that contains arithmetic expression. Variable `level` can be used in the expression.|

### `source` object

|Property|Description|
|-|-|
|`type`|A string. Defines the type of the source.|
|`data`|An `source_data` element.|
|`team_sharing`|An `team_sharing` object.|

### `team_sharing` object

|Property|Description|
|-|-|
|`distance_limit`|An float. Defines the distance limit for sharing experience between players in the same team.|

## Experience sources

You can read more about experience sources [here](/creators/configuration/experience-sources/experience-source).