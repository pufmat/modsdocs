# File `exchange.json`

This config is used to define exchange which allows buying point for vanilla experience levels. It is located in the `exchange.json` file inside each category folder. This file is optional, and if it is absent then exchange is not enabled for this category.

> [!NOTE]
> Exchange cannot be enabled when experience is enabled.

## Properties

### Level limit

Property `level_limit` can be used to set the maximum level.

### Cost Per Level

Property `cost_per_level` can be used to set cost for each level.

## Examples

The following exchange configuration uses expression to define cost per level.
```json
{
	"level_limit": 10,
	"cost_per_level": {
		"type": "expression",
		"data": {
			"expression": "level * 2 + 3"
		}
	}
}
```

The following exchange configuration uses values to define cost per level.
```json
{
	"level_limit": 10,
	"cost_per_level": {
		"type": "values",
		"data": {
			"values": [
				3, 5, 7, 9, 11, 13, 15, 17, 19, 21
			]
		}
	}
}
```

