# Operations

Operations are like functions and convert values with given [Prototypes](/creators/configuration/calculations/prototypes/prototype) to different ones.

::: info
Custom operations can be added using API.
:::

## Returning nothing {#nothing}

Some operations may sometimes return nothing. When nothing is passed to another operation it isn't executed. To catch nothing `fallback` property can be used. It defines that value should be used in case of nothing.