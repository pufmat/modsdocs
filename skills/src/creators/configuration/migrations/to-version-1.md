# New configuration

This update mostly changes experience source configuration. It now uses expressions to calculate experience based on conditions and parameters. Read more [here.](/creators/configuration/experience-sources/experience-source)

# Migration

## Experience per level

Before:

```json
"experience_per_level": [
	10,
	11,
	13,
	15,
	17,
	...
	173,
	179,
	186,
	193,
	200
]
```

After (using values):

```json
"experience_per_level": {
	"type": "values",
	"data": {
		"values": [
			10,
			11,
			13,
			15,
			17,
			...
			173,
			179,
			186,
			193,
			200
		]
	}
}
```

After (using expression):

```json
"experience_per_level": {
	"type": "expression",
	"data": {
		"expression": "min(level ^ 1.432 + 10, 200)"
	}
}
```

## Experience Source

Before:
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"anti_farming": {
			"enabled": true,
			"limit_per_chunk": 15,
			"reset_after_seconds": 300
		}
	}
}

```
After:
```json
{
	"type": "puffish_skills:kill_entity",
	"data": {
		"parameters": {
			"dropped_xp": {
				"type": "entity_dropped_experience"
			}
		},
		"experience": [
			{
				"expression": "dropped_xp"
			}
		],
		"anti_farming": {
			"enabled": true,
			"limit_per_chunk": 15,
			"reset_after_seconds": 300
		}
	}
}
```

## Categories

`categories.json` is now part of `config.json`

Before:

File `categories.json`:
```json
[
	"combat",
	"mining"
]
```

After:

File `config.json`:
```json
{
	"version": 1,

	"categories": [
		"combat",
		"mining"
	]
}
```

## Category

There is a new property `exclusive_root` in `category.json`. It decides if root skills should be exclusive, so when one of them is unlocked, the others are locked.

Before:
```json
{
	"unlocked_by_default": true,
	"title": "Combat",
	"icon": {
		"type": "item",
		"data": {
			"item": "diamond_sword"
		}
	},
	"background": "textures/gui/advancements/backgrounds/adventure.png"
}
```

After:
```json
{
	"exclusive_root": true,
	"unlocked_by_default": true,
	"title": "Combat",
	"icon": {
		"type": "item",
		"data": {
			"item": "diamond_sword"
		}
	},
	"background": "textures/gui/advancements/backgrounds/adventure.png"
}
```