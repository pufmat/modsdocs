# Definition

This config is used to create skill definition to use it later as template in skills config.

## Properties

### Title

Property `title` defines the skill title that will be visible in the game.

### Frame

Property `frame` defines the skill [frame](/creators/configuration/appearance/frame) that will be visible in the game.

### Icon

Property `icon` defines the skill [icon](/creators/configuration/appearance/icon) that will be visible in the game.

### Size

Property `size` defines the size of the skill that will be visible in the game.

### Description

Property `description` defines the skill description that will be visible in the game. If not set it will not show at all.

### Extra Description

Property `extra_description` defines the extra description, which is only displayed only while pressing <kbd>Shift</kbd>. If not set it will not show at all.

### Rewards

Property `rewards` defines the list of [rewards](/creators/configuration/rewards/reward)) that will be given after the skill is unlocked.

### Cost

Property `cost` defines how many points are required to unlock this skill, and how many points will be subtracted after unlocking. If not set then defaults to `1`.

### Required Points

Property `required_points` defines how many points are required to unlock this skill. If not set then defaults to `0`.

### Required Skills

Property `required_skills` defines how many neighbor skills need to be unlocked before the skill itself can be. If not set then defaults to `1`.

### Required Spent Points

Property `required_spent_points` defines how many already spent points in the current tree are required to unlock the skill. If not set then defaults to `0`.

### Required Exclusions

Property `required_exclusions` defines how many neighbor skills connected with [Exclusive Connections](/creators/configuration/connection#exclusive-connections) must be unlocked for the skill to become excluded. If not set then defaults to `1`.

## Example

The following definition describes a skill that after unlocking gives a player one more hearth (2 health points).

```json
{
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
```

## JSON Structure

|Property|Type|Required|
|-|-|-|
|`title`|[`text`](/creators/configuration/appearance/text) object|yes|
|`icon`|[`icon`](/creators/configuration/appearance/icon) object|yes|
|`frame`|[`frame`](/creators/configuration/appearance/frame) object|yes|
|`size`|float|no|
|`description`|[`text`](/creators/configuration/appearance/text) object|no|
|`rewards`|[`rewards`](/creators/configuration/rewards/reward) array|no|
|`cost`|integer|no|
|`required_points`|integer|no|
|`required_skills`|integer|no|
|`required_spent_points`|integer|no|
|`required_exclusions`|integer|no|
