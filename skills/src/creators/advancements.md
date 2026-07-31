# Advancements

## Skill Unlocked Trigger

Trigger `puffish_skills:skill_unlocked` activates when skill is unlocked and conditions are met:
- Condition `category` - The ID of the category.
- Condition `skill` - The ID of the skill.

### Example

The following trigger activates when skill `ykn32h02xhgaujyr` is unlocked in category `example:phantom`.

```json
{
    "trigger": "puffish_skills:skill_unlocked",
    "conditions": {
        "category": "example:phantom",
        "skill": "ykn32h02xhgaujyr"
    }
}
```