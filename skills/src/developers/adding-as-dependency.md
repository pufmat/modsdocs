# Adding as a dependency

Add repository:

::: code-group

```groovy [build.gradle]
repositories {
	maven {
		url = uri("https://maven.puffish.net")
	}
}
```

```kts [build.gradle.kts]
repositories {
	maven(url = "https://maven.puffish.net")
}
```

:::

Add dependencies:

::: code-group

```properties [Fabric]
dependencies {
	modImplementation("net.puffish:skillsmod:<version>:fabric")
}
```

```properties [Forge]
dependencies {
	implementation fg.deobf("net.puffish:skillsmod:<version>:forge")
}
```

```properties [NeoForge]
dependencies {
	implementation fg.deobf("net.puffish:skillsmod:<version>:neoforge")
}
```

:::

If the game crashed after adding dependencies due to Mixin errors then add following properties to your run configurations:
```groovy
minecraft {
	runs {
		configureEach {
			property 'mixin.env.remapRefMap', 'true' // [!code focus:2]
			property 'mixin.env.refMapRemappingFile', "${projectDir}/build/createSrgToMcp/output.srg"
		}
	}
}
```

Add dependency metadata:

::: code-group

```json [Fabric]
"depends": {
	"puffish_skills": "<version>"
}
```

```toml [Forge]
[[dependencies.<mod_id>]]
modId = "puffish_skills"
mandatory = true
versionRange = "[version,)"
```

```toml [NeoForge]
[[dependencies.<mod_id>]]
modId = "puffish_skills"
mandatory = true
versionRange = "[version,)"
```

:::