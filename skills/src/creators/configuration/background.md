# Background

There are two types of backgrounds:

- [Advancement Background](#advancement-background)
- [Custom Background](#custom-background)

## Advancement Background {#advancement-background}

This background works like vanilla advancement background. The texture should be 16x16 and it is tiled across the whole space:

### Example

```json
{
	...
    "background": "minecraft:textures/gui/advancements/backgrounds/adventure.png"
	...
}
```

## Custom Background {#custom-background}

### Properties

#### Texture

Property `texture` defines the texture that will be used as background.

#### Width and Height

Properties `width` and `height` define respectively width and height of the texture.

#### Position

Property `position` defines how the texture will be positioned on the screen. Possible options are:
- `tile` - Texture is tiled and repeated across the whole screen.
- `fill` - Textures is scaled such that it covers the whole screen.
- `fill_width` - Textures is scaled such that it covers the width of screen.
- `fill_height` - Textures is scaled such that it covers the height of screen.

If not set defaults the texture is centered on the screen and has original size.

### Example

```json
{
	...
    "background": {
    	"texture": "minecraft:textures/gui/title/background/panorama_0.png",
		"width": 1024,
		"height": 1024,
		"position": "fill"
	}
	...
}
```

### JSON Structure

|Property|Type|Required|
|-|-|-|
|`texture`|string|yes|
|`width`|integer|yes|
|`height`|integer|yes|
|`position`|`tile` or `fill` or `fill_width` or `fill_height`|no|