# File `category.json`

This config is used to define general properties for the category. It is located in the `category.json` file inside each category folder.

## Properties

### Title

Property `title` can be used to set category title visible in game.

### Description

Property `description` defines the category description visible in game. If not set it will not show.

### Extra Description

Property `extra_description` defines the extra description, which is only displayed while pressing <kbd>Shift</kbd>. If not set it will not show.

### Icon

Property `icon` can be used to set category icon visible in game.

### Background

Property `background` can be used to set category [background](/creators/configuration/appearance/background) visible in game.

### Unlocked by Default

Property `unlocked_by_default` can be used to define if category should be unlocked be default. When set to `false`, category must be manually unlocked using commands or API.

### Starting Points

Property `starting_points` can be used to set starting points for category. When this option is not set it defaults to 0.

### Spent Points Limit

Property `spent_points_limit` can be used to set maximum number of points that can be spent in this category. When this option is not set there is no limit.

### Exclusive Root

Property `exclusive_root` can be used to set behavior of [root skills](/creators/configuration/skill#roots).

## Example

```json
{
	"unlocked_by_default": true,
	"exclusive_root": true,
	"title": "Something",
	"icon": {
		"type": "item",
		"data": {
			"item": "dirt"
		}
	},
	"background": "textures/gui/advancements/backgrounds/stone.png"
}
```

## JSON Structure

|Property|Type|Required|
|-|-|-|
|`title`|`text` object|yes|
|`description`|[`text`](/creators/configuration/appearance/text) object|no|
|`extra_description`|[`text`](/creators/configuration/appearance/text) object|no|
|`icon`|`icon` object|yes|
|`background`|string|yes|
|`unlocked_by_default`|boolean|no|
|`starting_points`|integer|no|
|`spent_points_limit`|integer|no|
|`exclusive_root`|boolean|no|