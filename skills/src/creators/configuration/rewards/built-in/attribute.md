# Attribute Reward

## Example

The following reward gives a player one more hearth (2 health points) for each unlocked skill.

```json
{
	"type": "puffish_skills:attribute",
	"data": {
		"attribute": "generic.max_health",
		"value": 2,
		"operation": "addition"
	}
}
```

## JSON Structure

### `reward_data` object when `type` is `puffish_skills:attribute`:

|Property|Description|
|-|-|
|`attribute`|A string. An attribute id.|
|`value`|An integer. Defines attribute modifier value.|
|`operation`|An integer. Defines attribute modifier operation. Possible values are: `addition`, `multiply_base`, `multiply_total`.|