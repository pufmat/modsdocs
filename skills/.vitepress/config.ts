import { defineConfig } from "vitepress";
import { sidebar } from "../../meta.ts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Pufferfish's Skills",
	description: "Pufferfish's Skills Mod Documentation",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: "Editor",
				link: "https://puffish.net/skillsmod/editor/"
			},
			{
				text: "Download",
				items: [
					{
						text: "CurseForge",
						link: "https://www.curseforge.com/minecraft/mc-mods/puffish-skills",
					},
					{
						text: "Modrinth",
						link: "https://modrinth.com/mod/skills",
					},
				],
			},
			{
				text: "Contributors",
				link: "/contributors"
			},
		],
		sidebar: {
			players: sidebar("Players Guide", "players"),
			creators: sidebar("Creators Guide", "creators"),
			developers: sidebar("Developers Guide", "developers"),
		},
		outline: {
			level: "deep",
		},
		socialLinks: [
			{
				icon: "discord",
				link: "https://discord.gg/F4EKxzW4hf"
			},
			{
				icon: "github",
				link: "https://github.com/pufmat/skillsmod"
			},
		],
		search: {
			provider: "local",
		},
	},
	sitemap: {
		hostname: "https://puffish.net/skillsmod/docs/",
	},
	base: "/skillsmod/docs",
	lastUpdated: true,
	cleanUrls: true,
	srcDir: "src",
});
