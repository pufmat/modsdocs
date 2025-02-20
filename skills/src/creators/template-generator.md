<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import { BlobWriter, TextReader, ZipWriter } from "@zip.js/zip.js";
import { VPButton } from "vitepress/theme";

import packMcMeta from "./template-generator/pack.mcmeta.js";
import fabricModJson from "./template-generator/fabric.mod.json.js";
import modsToml from "./template-generator/mods.toml.js";
import neoforgeModsToml from "./template-generator/neoforge.mods.toml.js";
import configJson from "./template-generator/config.json.js";
import categoryJson from "./template-generator/category.json.js";
import definitionsJson from "./template-generator/definitions.json.js";
import skillsJson from "./template-generator/skills.json.js";
import connectionsJson from "./template-generator/connections.json.js";
import experienceJson from "./template-generator/experience.json.js";


const name = ref("");
const namespace = ref("");
const gameVersion = ref("new");
const description = ref("");

watchEffect(() => namespace.value = name.value.toLowerCase().replace(/ /g, "_").replace(/[^a-z0-9_-]*/g, ""));

const nameValid = computed(() => name.value.length >= 1);
const namespaceValid = computed(() => /^[a-z0-9_-]+$/.test(namespace.value));

const exampleSkillTree = ref(false);
const supportForModLoaders = ref(false);
const assetsFolder = ref(false);

async function download() {
	const zip = new ZipWriter(new BlobWriter("application/zip"));

	const promises = [];

	promises.push(zip.add(
		"pack.mcmeta",
		new TextReader(packMcMeta({
			description: description.value
		})
	)));

	if (supportForModLoaders.value) {
		promises.push(zip.add(
			"fabric.mod.json",
			new TextReader(fabricModJson({
				name: name.value,
				namespace: namespace.value,
				description: description.value
			}))
		));
		promises.push(zip.add(
			"META-INF/mods.toml",
			new TextReader(modsToml({
				name: name.value,
				namespace: namespace.value,
				description: description.value
			}))
		));
		promises.push(zip.add(
			"META-INF/neoforge.mods.toml",
			new TextReader(neoforgeModsToml({
				name: name.value,
				namespace: namespace.value,
				description: description.value
			}))
		));
	}

	if (assetsFolder.value) {
		promises.push(zip.add(`assets/${namespace.value}`, null, {
			directory: true,
			compressionMethod: 8 /* deflate */
		}));
	}

	if (exampleSkillTree.value) {
		promises.push(zip.add(
			`data/${namespace.value}/puffish_skills/config.json`,
			new TextReader(configJson())
		));
		promises.push(zip.add(
			`data/${namespace.value}/puffish_skills/categories/example/category.json`,
			new TextReader(categoryJson())
		));
		promises.push(zip.add(
			`data/${namespace.value}/puffish_skills/categories/example/definitions.json`,
			new TextReader({
				"new": definitionsJson(),
				"old": definitionsJson().replaceAll("\"attribute\": \"", "\"attribute\": \"generic.")
			}[gameVersion.value])
		));
		promises.push(zip.add(
			`data/${namespace.value}/puffish_skills/categories/example/skills.json`,
			new TextReader(skillsJson())
		));
		promises.push(zip.add(
			`data/${namespace.value}/puffish_skills/categories/example/connections.json`,
			new TextReader(connectionsJson())
		));
		promises.push(zip.add(
			`data/${namespace.value}/puffish_skills/categories/example/experience.json`,
			new TextReader(experienceJson())
		));
	} else {
		promises.push(zip.add(`data/${namespace.value}`, null, {
			directory: true,
			compressionMethod: 8 /* deflate */
		}));
	}

	await Promise.all(promises);

	const blob = await zip.close();
	const url = URL.createObjectURL(blob);
	const a = Object.assign(document.createElement("a"), {
		download: `${namespace.value}-template.zip`,
		href: url
	});

	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

	URL.revokeObjectURL(url);
}
</script>

# Template Generator

## Settings



### Name

Choose a name for your project.
<input type="text" v-model="name" minlength="1" placeholder="Example Project" />
<span class="error" :class="{ valid: nameValid }">
Name cannot be empty.
</span>



### Namespace

Choose a namespace for your project. It should be unique for different projects.
<input type="text" v-model="namespace" pattern="[a-z0-9_-]+" placeholder="example_project" />
<span class="error" :class="{ valid: namespaceValid }">
Namespace cannot be empty and must use only lowercase characters, digits, underscores and dashes.
</span>



### Description

Write description of your project.
<input type="text" v-model="description" placeholder="This project was made using Pufferfish's Template Generator." />



### Example Skill Tree

<input type="checkbox" v-model="exampleSkillTree" />
Generate example skill tree files.



<div class="dependant":class="{ disabled: !exampleSkillTree }">

### Game Version

<select v-model="gameVersion" :disabled="!exampleSkillTree">
	<option value="new">1.21.3 or later</option>
	<option value="old">1.18.2 to 1.21.2</option>
</select>
</div>



### Support for Mod Loaders

<input type="checkbox" v-model="supportForModLoaders" />
Generate necessary files to support loading through mod loaders.



<div class="dependant":class="{ disabled: !supportForModLoaders }">

### Assets Folder

<input type="checkbox" v-model="assetsFolder" :disabled="!supportForModLoaders" />
Generate folder for assets. Requires loading through mod loaders to work.
</div>



## Output

Generated template provides everything needed to be loaded into the game. You can start modifying it and adding your own content right away.
<VPButton text="Generate and download" @click="download" :disabled="!nameValid || !namespaceValid" />
<span class="error" :class="{ valid: nameValid && namespaceValid }">
There are errors above that need to be fixed in order to generate the template.
</span>



<style scoped>
input, select {
	height: 40px;
}
input[type=checkbox] {
	width: 20px;
	height: 20px;
	margin: 8px 4px;
	vertical-align: baseline;
}
input[type=text], select {
	background-color: var(--vp-c-bg-alt);
	border: 1px solid transparent;
	border-radius: 8px;
	padding: 0 10px 0 12px;
	width: 100%;
	margin: 8px 0;
}
button.VPButton:disabled, button.VPButton:disabled:hover {
	filter: grayscale(1) contrast(0.5);
}
input + .error {
	margin-top: -8px;
}
.dependant {
	border-left: 1px solid var(--vp-c-text-1);
	padding-left: 16px;
}
.dependant.disabled {
	border-left-color: var(--vp-c-text-3);
	color: var(--vp-c-text-3);
}
.error {
	color: var(--vp-c-danger-1);
	font-size: 14px;
	display: block;
}
.error.valid {
	visibility: hidden;
}
</style>