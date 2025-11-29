# Scoreboard Reward

## Example

The following reward sets the score in scoreboard for the player based on how many skills were unlocked.

```json
{
	"type": "puffish_skills:scoreboard",
	"data": {
		"objective": "scoreboard_objective_name_here"
	}
}
```

## Json Structure

### `reward_data` object when `type` is `puffish_skills:scoreboard`:

|Property|Description|
|-|-|
|`objective`|A string. A name of a scoreboard objective.|