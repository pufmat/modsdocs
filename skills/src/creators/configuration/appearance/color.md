# Color

This configuration allows changing color of connections and points per category.

## Color Format

Color are in the hex format with `#` at the beginning. There are four possible notations to define a color:

- `#RGB`
- `#RGBA`
- `#RRGGBB`
- `#RRGGBBBAA`

where `R` is red component, `G` is green component, `B` is blue component and `A` is alpha component.

## Stroke and Fill

Since colors often describe both fill and stroke colors, there are two ways to specify them:

- [Precise Color](#precise-color)
- [Short Color](#short-color)

### Precise Color {#precise-color}

This way allows specifying both fill and stroke color. For example:

```json
{
	"fill": "#ff0000",
	"stroke": "#000000"
}
```

### Short Color {#short-color}

This way allows specifying only fill color, the stroke color is left unchanged. For example:

```json
"#ff0000"
```

## Properties

Each of the properties is optional and can use both ways to specify stroke and fill color.

* `connections`
  * `excluded` - Color of the exclusive connection.
  * `locked` - Color of the connection between skill with locked state and any other skill.
  * `available` - Color of the connection between skill with available state and skill with unlocked state.
  * `affordable` - Color of the connection between skill with affordable state and skill with unlocked state.
  * `unlocked` - Color of the connection between two skill with unlocked state.
* `points` - Color of the points left number.
