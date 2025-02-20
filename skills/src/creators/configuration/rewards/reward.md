# Reward

Rewards are things that are given after a skill is unlocked.

There are following built-in reward types:

- [Attribute](/creators/configuration/rewards/built-in/attribute)
- [Command](/creators/configuration/rewards/built-in/command)
- [Scoreboard](/creators/configuration/rewards/built-in/scoreboard)
- [Tag](/creators/configuration/rewards/built-in/tag)

::: info
Custom rewards can be added using API.
:::

## Properties

### Type

Property `type` defines the type of the reward.

### Data

Structure of the `data` property is different depending on chosen reward type.

### Required

Property `required` defines if this reward is required to load successfully. If set to `false`, warning is generated instead of an error when reward fails to load. If not set defaults to `true`.

## JSON Structure

|Property|Type|Required|
|-|-|-|
|`type`|string|yes|
|`data`|any|no|
|`required`|boolean|no|