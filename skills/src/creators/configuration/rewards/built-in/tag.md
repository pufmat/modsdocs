# Tag Reward

This reward adds or removes a tag for the player when the skill becomes unlocked or locked.

## Properties

### Version

Property `tag` defines the name of the tag that this reward will add or remove.

## Example

The following reward adds a tag named `something` for the player when the skill becomes unlocked, and removes it when skill becomes locked.

```json
{
	"type": "puffish_skills:tag",
	"data": {
		"tag": "something"
	}
}
```

## Json Structure

### `reward_data` object when `type` is `puffish_skills:tag`:

|Property|Type|Required|
|-|-|-|
|`tag`|string|yes|