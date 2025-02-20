export default () => `
{
	"experience_per_level": {
		"type": "expression",
		"data": {
			"expression": "min(level ^ 1.432 + 10, 200)"
		}
	},
	"sources": [
		{
			"type": "puffish_skills:kill_entity",
			"data": {
				"variables": {
					"dropped_xp": {
						"operations": [
							{
								"type": "get_dropped_experience"
							}
						]
					},
					"max_health": {
						"operations": [
							{
								"type": "get_killed_living_entity"
							},
							{
								"type": "get_max_health"
							}
						]
					}
				},
				"experience": "dropped_xp + max_health / 20",
				"anti_farming": {
					"limit_per_chunk": 15,
					"reset_after_seconds": 300
				}
			}
		}
	]
}
`.trim();