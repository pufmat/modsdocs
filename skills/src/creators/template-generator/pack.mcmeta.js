export default ({ description }) => `
{
	"pack": {
		"pack_format": 8,
		"supported_formats": [0, 999],
		"description": ${JSON.stringify(description)}
	}
}
`.trim();