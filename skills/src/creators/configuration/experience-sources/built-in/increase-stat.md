# Increase Stat Experience Source

Experience Source `puffish_skills:increase_stat` gives experience every time player's statistics are increased.

You can read more about statistics [here](https://minecraft.wiki/w/Statistics). Custom statistics generally give the most interesting possibilities.

While is can cover other experience sources, it is not as powerful as them due to the lack of specific operations.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

### Get Stat

Operation `get_stat` returns `minecraft:stat` prototype.

### Get Increase Amount

Operation `get_increase_amount` returns `puffish_skills:number` prototype which represents the amount the statistic has been increased by.

## Examples

The following experience source gives the player exactly 5 experience every time player jumps.
::: details Click to view
```json
{
	"type": "puffish_skills:increase_stat",
	"data": {
		"variables": {
			"is_jump": {
				"operations": [
					{
						"type": "get_stat"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"stat": "minecraft.custom:minecraft.jump"
						}
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_jump",
				"expression": "5"
			}
		]
	}
}
```
:::

The following experience source gives the player experience for every centimeter swam.
::: warning
This example gives a lot of experience, make sure to adjust experience curve accordingly.
:::
::: details Click to view
```json
{
	"type": "puffish_skills:increase_stat",
	"data": {
		"variables": {
			"is_swim": {
				"operations": [
					{
						"type": "get_stat"
					},
					{
						"type": "puffish_skills:test",
						"data": {
							"stat": "minecraft.custom:minecraft.swim_one_cm"
						}
					}
				]
			},
			"amount": {
				"operations": [
					{
						"type": "get_increase_amount"
					}
				]
			}
		},
		"experience": [
			{
				"condition": "is_swim",
				"expression": "amount"
			}
		]
	}
}
```
:::