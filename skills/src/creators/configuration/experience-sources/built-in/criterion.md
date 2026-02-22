# Criterion Experience Source

Experience Source `puffish_skills:criterion` gives experience every time the player triggers criterion.

In general criteria are a part of the advancements to define when they should be granted. You can [read more about criteria on the Minecraft Wiki](https://minecraft.wiki/w/Advancement_definition#Criteria). This experience source can be triggered multiple times, unlike advancements which can only be granted once.

While is can cover other experience sources, it is not as powerful as them due to the lack of specific operations.

This [Experience Source](/creators/configuration/experience-sources/experience-source) uses [Variables](/creators/configuration/calculations/variables) and [Calculation](/creators/configuration/calculations/calculation).

## Operations

### Get Player

Operation `get_player` returns `minecraft:player` prototype.

## Examples

The following experience source gives the player exactly 10 experience every time player shots the center of a target block from at least 30 blocks away horizontally.
This is exactly the same criterion as in Bullseye advancement.
::: details Click to view
```json
{
    "type": "puffish_skills:criterion",
    "data": {
        "criterion": {
            "conditions": {
                "projectile": [
                    {
                        "condition": "minecraft:entity_properties",
                        "entity": "this",
                        "predicate": {
                            "distance": {
                                "horizontal": {
                                    "min": 30.0
                                }
                            }
                        }
                    }
                ],
                "signal_strength": 15
            },
            "trigger": "minecraft:target_hit"
        },
        "experience": "10"
    }
}
```
:::