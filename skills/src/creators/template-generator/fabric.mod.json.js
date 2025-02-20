export default ({ name, namespace, description}) => `
{
	"schemaVersion": 1,
	"id": ${JSON.stringify(namespace)},
	"version": "1.0",
	"name": ${JSON.stringify(name)},
	"description": ${JSON.stringify(description)},
	"authors": [
		"Pufferfish's Template Generator"
	],
	"license": "Unlicense",
	"environment": "*"
}
`.trim()