export default ({ name, namespace, description}) => `
modLoader="lowcodefml"
loaderVersion="[1,)"
license="Unlicense"

[[mods]]
modId=${JSON.stringify(namespace)}
version="1.0"
displayName=${JSON.stringify(name)}
description=${JSON.stringify(description)}
authors="Pufferfish's Template Generator"
`.trim()