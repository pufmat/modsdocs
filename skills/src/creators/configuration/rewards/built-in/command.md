# Command Reward

This reward executes commands when skill becomes unlocked or locked.

## Permission level

Commands are executed with the same permission level as functions.
If the command requires higher permission level it will not be executed.

Read more about permission levels [here](https://minecraft.wiki/w/Permission_level).

## Execution time

It is possible to specify three different commands to execute:

- Immediate Command - `command`
- Unlock Command - `unlock_command`
- Lock Command - `lock_command`

### Immediate Command

Immediate Command executes at the moment when the player unlocks the skill. This command should be used when granting things that can't be revoked, like giving items.

### Unlock Command

Unlock Command executes when skill should become unlocked for the player. This command can execute again after Lock Command was called even when only one skill was ever unlocked. This command should be used to granted things that can be alter revoked.

### Lock Command

Lock Command executes when skill should become locked for the player. This is guaranteed to execute the exact amount of times the Unlock Command was executed. This command should be used to revoke previously granted things.

> [!TIP]
> If possible always prefer using a pair of Unlock Command and Lock Command instead of Immediate Command. This is important to make skill respecialization work correctly.

## Example

The following reward executes unlock and lock commands, in this example it grants and revokes advancement `skill` from a data pack with namespace `example`.

```json
{
	"type": "puffish_skills:command",
	"data": {
		"unlock_command": "advancement grant @s only example:skill",
		"lock_command": "advancement revoke @s only example:skill"
	}
}
```

The following reward executes a command, in this example it gives a diamond for the player every time a skill is unlocked.

```json
{
	"type": "puffish_skills:command",
	"data": {
		"command": "give @s minecraft:diamond"
	}
}
```

## Json Structure

### `reward_data` object when `type` is `puffish_skills:command`:

|Property|Description|
|-|-|
|`tag`|A string. A command to execute at the moment the skill is unlocked.|
|`unlock_command`|A string. A command to execute when the skill is supposed to be unlocked.|
|`lock_command`|A string. A command to execute when the skill is supposed to be locked.|