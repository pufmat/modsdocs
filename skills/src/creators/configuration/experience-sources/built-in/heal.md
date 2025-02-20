# Heal Experience Source

Experience Source `puffish_skills:heal` gives experience when player heals.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).


## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Heal Amount

Operation `get_heal_amount` returns `puffish_skills:number` prototype which represents the amount of healed health.

## Example

The following experience source gives a player experience value equal to 3 times healed health.
::: details Click to view
```json
{
	"type": "puffish_skills:heal",
	"data": {
		"variables": {
			"amount": {
				"operations": [
					{
						"type": "get_heal_amount"
					}
				]
			}
		},
		"experience": "amount * 3"
	}
}
```
:::