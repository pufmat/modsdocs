# Creating custom skill trees tutorial

> [!IMPORTANT]
> This tutorial requires knowledge about navigating folders, editing files with JSON format, creating and extracting ZIP archives.

## Creating the project

The easiest way to get started is to create project files using [Template Generator]. Choose the name of your project. For this tutorial enable Example Skill Tree option.

Alternatively you can download Default Skill Trees or any other data pack and use it as a starting template. However, this is only recommended for advanced user.

## Loading the project into the game

The file created by the [Template Generator] is a data pack in a ZIP format. To load it in the game create a new world or use existing one, then extract that file into a `datapacks` folder located in the world folder. In the `datapacks` folder there should be a folder with name of your data pack.

Launch the game and join that world, if you did everything correctly in the skills screen you should have the Example Skill Tree.

Different methods to load the project are described in the [tutorial about loading skill trees](/creators/tutorials/loading-skill-trees).

## The project files

Inside your project folder there should be a `data` folder, and a `pack.mcmeta` file which is a metadata file of the data pack. The content should look like this:
```json
{
	"pack": {
		"pack_format": 8,
		"supported_formats": [0, 999],
		"description": "Description specified in the Template Generator."
	}
}
```

The `data` folder contains all data added by the data pack, grouped by sub folders which names represent namespaces. There should be a folder named by the namespace specified in the [Template Generator]. You should only add data in your namespace folder to avoid conflicts with other projects.

The namespace folder should have a `puffish_skills` folder which contains configuration files for this mod. If the Example Skill Tree option was selected in the [Template Generator](https://puffish.net/skillsmod/docs/creators/template-generator), then there should be a `categories` folder, and a `config.json` file which specifies the version of the configuration and list of categories. The content should look like this:
```json
{
	"version": 2,

	"categories": [
		"example"
	]
}
```

The `categories` folder consists of other folders which names are IDs of the categories matching these specified in `config.json` file. Each category folder must have `category.json`, `definitions.json`, `skills.json`, `connections.json` files and optionally `experience.json` file. More information about content of the files can be found in their dedicated pages in this documentation.

## Adding new definitions

> [!TIP]
> It is recommended to use an advanced text editor with syntax highlighting, automatic formatting and validation.

Definitions can be seen as templates which define properties of each skill. They allow you to have multiple skill sharing the same properties, without need to specify properties of each skill separately. To add new definitions you need to modify the `definitions.json` file. All the information about what properties are allowed can be found in the [documentation of the definition](https://puffish.net/skillsmod/docs/creators/configuration/definitions). For easier and faster creation of the definition it is recommended to copy existing definition and modify it according to your needs.

## Using the online editor

To start using the [Editor] to modify existing category you need to import `definitions.json`, `skills.json` and `connections.json` files. However, if you are creating a new category, then importing only `definitions.json` is enough. The [Editor] is limited only to designing skills layout and connections. To add more definitions you need to manually add them to `definitions.json` file and import it again.

After finishing the work, exporting only `skills.json` and `connections.json` files is necessary. It is also possible to export `definitions.json` with the "Save metadata" option is enabled, to keep skill icons between sessions in the [Editor]. Session is remembered until you clear the browser data, but it is recommended to export files once in a while to avoid losing your work.

## Adding another category

To add a new category, you need to create a new folder in the `categories` folder. The name of that folder must not use other characters than lowercase characters, numbers, underscores and dashes. Then you need to edit the `config.json` file and add the name of that new folder to the `categories` array. Then next step is to copy `category.json`, `definitions.json` files and optionally `experience.json` file from the other category to that folder and edit them according to your needs. Finally, you can import `definitions.json` file to the [Editor] and use it to export the remaining required files which are `skills.json` and `connections.json` files.

## Troubleshooting

![Error "Invalid configuration, check game logs."](/errors/invalid-config.png)
If you get such error in game, then check the game logs and search for `puffish_skills`. The logs can be found in `logs/latest.log` file in the game installation directory.

- If the error is "Could not parse JSON due to malformed syntax" it means the file violates JSON format. This is often caused by a missing or misplaced comma or bracket. These errors can be easily located and fixed using JSON validators.
- If the errors is "Expected ..." it means that the mod expected certain thing, but got something completely different. These errors can be solved by checking the documentation of that part of the configuration.
- If the errors is "Invalid ..." it means that the mod got something, that doesn't match the documentation. These errors can be solved by checking the documentation of that thing.
- If the error is "Unknown ..." it means that the mod could not find certain thing by the provided data. This is usually caused by a typo in the name of that thing. Alternatively it may be caused because something was added in the newer version of the game or by a mod which is not installed.
- If the error is "Unused field ..." it means that there is an entry in the configuration that should not be there. This is usually caused by a typo in the name of that entry.

[Template Generator]: /creators/template-generator
[Editor]: /creators/editor