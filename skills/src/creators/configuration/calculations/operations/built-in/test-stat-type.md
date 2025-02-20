# Test Stat Type Operation

Converts [`minecraft:stat_type` prototype](/creators/configuration/calculations/prototypes/built-in/stat) into [`puffish_skills:boolean` prototype](/creators/configuration/calculations/prototypes/built-in/boolean) whether the condition matches given stat.

> [!INFO]
> This operation isn't very useful as it only checks the type of the statistic. To check for full statistic use [Test Stat Operation](/creators/configuration/calculations/operations/built-in/test-stat).

## JSON structure

|Property|Type|Required|
|-|-|-|
|`stat_type`|[stat type identifier](https://minecraft.wiki/w/Statistics)|yes|