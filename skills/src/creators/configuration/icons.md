# Icon

## Icon Types

There are three types of icons.

- [Item Icon](#item-icon)
- [Effect Icon](#effect-icon)
- [Custom Texture Icon](#texture-icon)

### Item Icon {#item-icon}

Items can be used as skill icons.

The following example uses the `minecraft:bow` item as an skill icon.

```json
{
    "type": "item",
    "data": {
        "item": "minecraft:bow"
    }
}
```

### Effect Icon {#effect-icon}

Effects can be used as skill icons.

The following example uses the `minecraft:luck` potion effect as an skill icon.

```json
{
    "type": "effect",
    "data": {
        "effect": "minecraft:luck"
    }
}
```

### Custom Texture Icon {#texture-icon}

Custom textures can be used as skill icons.

The following example uses texture located in `textures/icons` from a resource pack with namespace `example`.

```json
{
    "type": "texture",
    "data": {
        "texture": "example:textures/icons/texture.png"
    }
}
```