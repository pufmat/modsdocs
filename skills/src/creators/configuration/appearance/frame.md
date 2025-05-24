# Frame

## Frame Types

There are two types of frames.

- [Advancement Frame](#advancement-frame)
- [Custom Texture Frame](#texture-frame)

### Advancement Frame {#advancement-frame}

Vanilla advancement frames can be used as skill frames. There are three advancement frames in vanilla:
- `task`
- `goal`
- `challenge`

The following example uses the `task` advancement frame.

```json
{
    "type": "advancement",
    "data": {
        "frame": "task"
    }
}
```

### Custom Texture Frame {#texture-frame}

Skill frames also can use custom textures. Since skills can have different [states], there is a frame texture for each state. Some states may not have textures provided, in such situation an automatically generated fallback texture is used.
- Available - No fallback, texture must be set.
- Unlocked - No fallback, texture must be set.
- Excluded - Fallbacks to texture from Available state with filter that makes it darker.
- Locked - Fallbacks to texture from Available state with filter that makes it darker.
- Affordable - Fallbacks to texture from Available state.

The simplest way is to use two textures, like vanilla does for advancements. Only textures for unlocked variant and available variant are needed. The other variants will be automatically generated.

The following example specifies minimum amount of textures. The textures are located in `textures/frames` from a resource pack with namespace `example`.

```json
{
    "type": "texture",
    "data": {
        "unlocked": "example:textures/frames/unlocked.png",
        "available": "example:textures/frames/available.png"
    }
}
```

The more complex way is to also specify other textures. This allows to decide how each [skill states][states] looks.

The following example specifies textures for all states except Affordable. The textures are located in `textures/frames` from a resource pack with namespace `example`.

```json
{
    "type": "texture",
    "data": {
        "unlocked": "example:textures/frames/unlocked.png",
        "available": "example:textures/frames/available.png",
        "locked": "example:textures/frames/locked.png",
        "excluded": "example:textures/frames/excluded.png"
    }
}
```

[states]: /creators/configuration/skill#states