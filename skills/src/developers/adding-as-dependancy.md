# Adding as a dependency

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

::: code-group

```properties [Fabric]
dependencies {
	modImplementation("net.puffish:skillsmod:<version>:fabric")
}
```

```properties [Forge]
dependencies {
	compileOnly fg.deobf("net.puffish:skillsmod:<version>:forge")
}
```

```properties [NeoForge]
dependencies {
	compileOnly fg.deobf("net.puffish:skillsmod:<version>:neoforge")
}
```

:::

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