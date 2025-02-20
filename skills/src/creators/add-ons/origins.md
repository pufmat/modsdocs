# Origins Add-on

This mod adds compatibility between Pufferfish's Skills and Origins.

## Download

- [CurseForge mod page](https://www.curseforge.com/minecraft/mc-mods/puffish-skills-origins)
- [Modrinth mod page](https://modrinth.com/mod/skills-origins)

## Added content

- Power Reward
- Unlock Category Power Type

### Power Reward

This reward can be used to grant [powers from Origins](https://origins.readthedocs.io/en/latest/misc/base_contents/powers/) for the player. More information in the [documentation about Power Reward](/creators/configuration/rewards/origins-add-on/power).

### Unlock Category Power Type

This [power type](https://origins.readthedocs.io/en/latest/types/power_types/) can be used to define a power which unlock categories. That power can then be assigned to a specific Origin, so when player chooses it, the category become unlocked.

#### Example

The following Origins power unlocks category `example:phantom`.

```json
{
    "type": "puffish_skills_origins:unlock_category",
    "category": "example:phantom"
}
```