# File `config.json`

This is the general config of the mod. It is located in the `config.json` file in the mod's config folder.

## Properties

### Version

Property `version` defines version of the configuration. Should be set to `3`.

### Show Warnings

Property `show_warnings` defines if warnings should be shown in the game logs. It is only available in the config file located in the mod config folder, but not in data packs.

### Categories

Property `categories` defines a list of categories IDs. Order in the list also determines the order of tabs in game. Each category ID must use characters between `a` to `z` and `_` character.

## Example

```json
{
	"version": 3,

	"show_warnings": true,

	"categories": [
		"combat",
		"mining"
	]
}
```

## JSON structure

|Property|Type|Required|
|-|-|-|
|`version`|integer|yes|
|`categories`|string array|yes|
|`show_warnings`|boolean|no|