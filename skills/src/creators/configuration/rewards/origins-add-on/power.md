# Power Reward

This reward grants or revokes an Origins power for the player when the skill becomes unlocked or locked.

## Properties

### Power

Property `power` defines the ID of the power that this reward will grant and revoke.

## Example

The following reward gives player a power `sprint_jump` from Origins.

```json
{
	"type": "puffish_skills_origins:power",
	"data": {
		"power": "origins:sprint_jump"
	}
}
```

## JSON Structure

|Property|Type|Required|
|-|-|-|
|`power`|string|yes|