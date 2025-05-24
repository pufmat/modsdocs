# Added Attributes

List of added attributes:

- Stamina
- Fortune
- Magic Damage
- Melee Damage
- Ranged damage
- Healing
- Jump
- Resistance
- Magic Resistance
- Melee Resistance
- Ranged Resistance
- Mining Speed
- Pickaxe Speed
- Axe Speed
- Shovel Speed
- Sprinting Speed
- Knockback
- Repair Cost
- Armor Shred
- Toughness Shred
- Protection Shred
- Resistance Shred
- Magic Resistance Shred
- Melee Resistance Shred
- Ranged Resistance Shred
- Natural Regeneration
- Stealth
- Life Steal
- Fall Reduction
- Bow Projectile Speed
- Crossbow Projectile Speed

## Stamina

Attribute `puffish_attributes:stamina` allows changing hard coded stamina value, which is 4 in vanilla. Stamina determines how much exhaustion player must collect to decrease food/saturation points.

## Fortune

[Dynamic attribute] `puffish_attributes:fortune` increases fortune when mining a block, also applies without having fortune enchant on the item.

This attribute also supports fractions, unlike vanilla fortune which only supports integers. This is done by randomly choosing either an attribute value rounded up or down with probability being the fractional part of the attribute value.

For example attribute value 1.75 results randomly in vanilla fortune either 1 or 2 with a chance of 25% and 75% respectively.

## Magic Damage

[Dynamic attribute] `puffish_attributes:magic_damage` increases damage dealt using magic.

Damage is considered magic if damage type is `minecraft:magic` or `minecraft:indirect_magic` or is in `c:is_magic` tag or `neoforge:is_magic` tag.

## Melee Damage

[Dynamic attribute] `puffish_attributes:melee_damage` increases damage dealt using melee weapons.

Damage is considered melee if damage source is direct and damage type is not in `minecraft:is_projectile` tag.

## Ranged damage

[Dynamic attribute] `puffish_attributes:ranged_damage` increases damage dealt using ranged weapons.

Damage is considered ranged if damage source is indirect or damage type is in `minecraft:is_projectile` tag.

## Healing

[Dynamic attribute] `puffish_attributes:healing` increases health that is restored by any kind of healing.

## Jump

[Dynamic attribute] `puffish_attributes:jump` increases the jump high of the player.

## Resistance

[Dynamic attribute] `puffish_attributes:resistance` deceases amount of taken damage.

## Magic Resistance

[Dynamic attribute] `puffish_attributes:magic_resistance` deceases amount of taken magic damage.

## Melee Resistance

[Dynamic attribute] `puffish_attributes:melee_resistance` deceases amount of taken melee damage.

## Ranged Resistance

[Dynamic attribute] `puffish_attributes:ranged_resistance` deceases amount of taken ranged damage.

## Mining Speed

[Dynamic attribute] `puffish_attributes:mining_speed` increases mining speed of the player.

## Pickaxe Speed

[Dynamic attribute] `puffish_attributes:pickaxe_speed` increases pickaxe mining speed of the player.

## Axe Speed

[Dynamic attribute] `puffish_attributes:axe_speed` increases axe mining speed of the player.

## Shovel Speed

[Dynamic attribute] `puffish_attributes:shovel_speed` increases shovel mining speed of the player.

## Sprinting Speed

[Dynamic attribute] `puffish_attributes:sprinting_speed` increases sprinting speed of the player.

## Knockback

[Dynamic attribute] `puffish_attributes:knockback` increases knockback power of the player.

## Repair Cost

[Dynamic attribute] `puffish_attributes:repair_cost` increases the repair cost in an anvil.

## Armor Shred

[Dynamic attribute] `puffish_attributes:armor_shred` decreases the armor points for the attacked entity.

## Toughness Shred

[Dynamic attribute] `puffish_attributes:toughness_shred` decreases the toughness points for the attacked entity.

## Protection Shred

[Dynamic attribute] `puffish_attributes:protection_shred` decreases the protection enchantment for the attacked entity.

## Resistance Shred

[Dynamic attribute] `puffish_attributes:resistance_shred` decreases resistance attribute for the attacked entity.

## Magic Resistance Shred

[Dynamic attribute] `puffish_attributes:magic_resistance_shred` decreases magic resistance attribute for the attacked entity.

## Melee Resistance Shred

[Dynamic attribute] `puffish_attributes:melee_resistance_shred` decreases melee resistance attribute for the attacked entity.

## Ranged Resistance Shred

[Dynamic attribute] `puffish_attributes:ranged_resistance_shred` decreases ranged resistance attribute for the attacked entity.

## Natural Regeneration

[Dynamic attribute] `puffish_attributes:natural_regeneration` increases health that is restored by natural regeneration.

## Stealth

[Dynamic attribute] `puffish_attributes:stealth` decreases distance of being detected by entities.

## Life Steal

[Dynamic attribute] `puffish_attributes:life_steal` increases health restored relative to dealt damage.

## Fall Reduction

[Dynamic attribute] `puffish_attributes:fall_reduction` reduces fall damage, by decreasing fall distance in blocks.

## Bow Projectile Speed

[Dynamic attribute] `puffish_attributes:bow_projectile_speed` increases bow projectile speed.

## Crossbow Projectile Speed

[Dynamic attribute] `puffish_attributes:crossbow_projectile_speed` increases crossbow projectile speed.



[Dynamic attribute]: /creators/dynamic-attribute