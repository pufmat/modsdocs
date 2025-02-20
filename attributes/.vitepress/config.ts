import { defineConfig } from "vitepress";
import { sidebar } from "../../meta.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Pufferfish's Attributes",
	description: "Pufferfish's Attributes Mod Documentation",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: "Download",
				items: [
					{
						text: "CurseForge",
						link: "https://www.curseforge.com/minecraft/mc-mods/puffish-attributes",
					},
					{
						text: "Modrinth",
						link: "https://modrinth.com/mod/attributes",
					},
				],
			},
			{
				text: "Contributors",
				link: "/contributors",
			},
		],
		sidebar: {
			creators: sidebar("Creators Guide", "creators"),
			developers: sidebar("Developers Guide", "developers"),
		},
		outline: {
			level: "deep",
		},
		socialLinks: [
			{
				icon: "discord",
				link: "https://discord.gg/F4EKxzW4hf",
			},
			{
				icon: "github",
				link: "https://github.com/pufmat/attributesmod",
			},
		],
		search: {
			provider: "local",
		},
	},
	sitemap: {
		hostname: "https://puffish.net/attributesmod/docs/",
	},
	base: "/attributesmod/docs",
	lastUpdated: true,
	cleanUrls: true,
	srcDir: "src",
});
