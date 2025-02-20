export default () => `
{
	"health+2": {
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
					"attribute": "max_health",
					"value": 2,
					"operation": "addition"
				}
			}
		]
	},
	"attack_speed+5%": {
		"title": "+5% Attack Speed",
		"icon": {
			"type": "item",
			"data": {
				"item": "golden_sword"
			}
		},
		"rewards": [
			{
				"type": "puffish_skills:attribute",
				"data": {
					"attribute": "attack_speed",
					"value": 0.05,
					"operation": "multiply_total"
				}
			}
		]
	},
	"movement_speed+5%": {
		"title": "+5% Movement Speed",
		"icon": {
			"type": "effect",
			"data": {
				"effect": "speed"
			}
		},
		"rewards": [
			{
				"type": "puffish_skills:attribute",
				"data": {
					"attribute": "movement_speed",
					"value": 0.05,
					"operation": "multiply_total"
				}
			}
		]
	}
}
`.trim();