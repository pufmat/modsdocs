# Points Reward

## Example

The following reward gives a player 3 points in category `example:phantom` for each unlocked skill.

```json
{
	"type": "puffish_skills:points",
	"data": {
		"category": "example:phantom",
		"points": 3,
	}
}
```

## JSON Structure

### `reward_data` object when `type` is `puffish_skills:points`:

|Property|Type|Required|
|-|-|-|
|`category`|identifier|yes|
|`points`|integer|yes|