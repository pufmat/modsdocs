# Skills

This config is used to define skill and their positions.

## States

There are states of skills which are checked in the following order:
1. Excluded - If the skill is connected using exclusive connection to another skill which is unlocked.
2. Locked - If the skill is not connected to any unlocked skill and is not root while other skills are locked.
3. Available - If the skill is connected to any unlocked skill or is root while other skills are locked.
4. Affordable - If the skill meats all requirements of available state and the number of required points is less than number of available points. Required points is by default equal to the cost.
5. Unlocked - If the skill has been clicked by the player when it was in the affordable state.

## Roots

Root skills are starting point in the skill tree. They behave differently depending on `exclusive_root` option value set in `category.json`.

When `exclusive_root` is set to `false`, or is not set at all. Then all root skills are available to unlock at any time.

When `exclusive_root` is set to `true`. Then all root skills are available, but after one of them is unlocked, other root skills became locked. However they can still be later unlocked just like normal skills.

## Storage

The mod only stores IDs of unlocked skills for each player. This includes skill that were removed from the configuration. This means that if a skill is later readded with the same ID, the players who had it unlocked in the past will now have it unlocked again.

## Properties

::: warning
It is recommended not to edit this piece of configuration manually. Use [editor](/creators/editor) instead.
:::

### X and Y

Properties `x` and `y` define respectively X and Y coordinate of the skill.

### Definition

Property `definition` defines what entry from `definitions.json` should the skill use.

### Root

Property `root` defines if the skill is a [root](https://puffish.net/skillsmod/docs/configuration/roots), which means it is unlocked at the beginning.

## Example

```json
{
	"x": 0,
	"y": 32,
	"definition": "definition_1",
	"root": true
}
```

## JSON Structure

|Property|Type|Required|
|-|-|-|
|`x`|integer|yes|
|`y`|integer|yes|
|`definition`|string|yes|
|`root`|string|no|