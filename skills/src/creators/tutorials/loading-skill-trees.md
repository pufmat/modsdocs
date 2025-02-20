# Loading skill trees tutorial

There are many ways to load skill tree into the game. You should pick one depending on your use case.

## Data packs only

This method loads skill trees thought data packs which should be put into the `datapacks` folder in the world folder.

**Pros:**
- Allows easy modification and development of the skill trees.
- Good for skill trees with no custom assets.

**Cons:**
- Custom assets cannot be loaded this way.
- Not suitable for use in mod packs, because must be manually added to each world.

## Data packs and resource packs

This method loads skill trees thought data packs which should be put into the `datapacks` folder in the world folder. Custom assets like  for example textures must be put into a separete resource pack in the `resourcepacks` folder.

**Pros:**
- Allows easy modification and development of the skill trees.

**Cons:**
- Custom assets are in a separate resource packs folder.
- Not suitable for use in mod packs, because must be manually added to each world.
- Hard to distribute and install by players.

## Mod loaders

This method uses mod loaders to load skill trees packed into code less mods. It allows loading both data and assets. Creating a code less mod requires additional files specific to mod loaders.

These files can be generated using [Template Generator] by enabling mod loader support option. The extension of the generated zip should be changed to jar and put it into the `mods` folder.

**Pros:**
- Easy to install for players, only single mod file required.
- Allows to distribute both data and assets of the skill trees together.

**Cons:**
- Hard to modify because requires repacking the jar file each time.

## Global data packs and resource packs

This method requires additional mod that can load global data packs and resource pack. Such mod allows loading both data packs and resource packs. They should be put into a folder specific to that mod, then they will be automatically loaded for all world.

**Pros:**
- Allows easy modification and development of the skill trees.
- Suitable for mod packs because everything is automatically loaded to all worlds.

**Cons:**
- Requires additional mod.
- Not suitable to distribute skill trees.

## Configuration folder

Put the skill tree into `config/puffish_skills`.

**Pros:**
- Allows easy modification and development of the skill trees.

**Cons:**
- Only supports loading data specific to the mod.
- Does not support loading custom assets.
- Not good for distribution, because zip files must be extracted into correct folder.

[Template Generator]: /creators/template-generator