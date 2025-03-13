import { DefaultTheme } from "vitepress";

const contributors: Record<string, Omit<DefaultTheme.TeamMember, "name">> = {
	"XxZenk": {
		avatar: "https://github.com/XxZenk0.png",
		title: "Russian translation",
		links: [
			{ icon: "github", link: "https://github.com/XxZenk0" }
		]
		// commit: 96579d4075d84640cf9f55038495e738c1807f1
	},
	"Cape-City": {
		avatar: "https://github.com/Cape-City.png",
		title: "German translation",
		links: [
			{ icon: "github", link: "https://github.com/Cape-City" }
		]
		// commit: 7df60c113bbe462eabc0eec7f641c3dacc45fd0e
	},
	"Potat": {
		avatar: "https://github.com/Potat369.png",
		title: "Russian translation",
		links: [
			{ icon: "github", link: "https://github.com/Potat369" }
		]
		// commit: ce3ebe7ff496a8ffcd26ec31261670fa522b717e
	},
	"Heimdallr-1": {
		avatar: "https://github.com/Heimdallr-1.png",
		title: "Russian translation",
		links: [
			{ icon: "github", link: "https://github.com/Heimdallr-1" }
		]
		// commit: 00f8ade34bcc54bc9cb863b469c29b936e5b0dcb
	},
	"Santiago Hernandez": {
		avatar: "https://github.com/TheLegendofSaram.png",
		title: "Mexican Spanish translation",
		links: [
			{ icon: "github", link: "https://github.com/TheLegendofSaram" }
		]
		// commit: 7896ad709594d7f5efb3c9e21671860a5489343c
	},
	"nageih": {
		avatar: "https://github.com/nageih.png",
		title: "Chinese translation",
		links: [
			{ icon: "github", link: "https://github.com/nageih" }
		]
		// commit: 587d706afa84aa16749b870c9c71a22ffb5a9329
	},
	"Ryo TAGAMI": {
		avatar: "https://github.com/RyoTagami.png",
		title: "Japanese translation",
		links: [
			{ icon: "github", link: "https://github.com/RyoTagami" }
		]
		// commit: 46669f0e9569f3157f8a3ab59abff287de7326bc
	},
	"smoong": {
		avatar: "https://github.com/smoong951.png",
		title: "Korean translation",
		links: [
			{ icon: "github", link: "https://github.com/smoong951" }
		]
		// commit: 9c381d2ee7504fee8b06886a104870f2219a40fe
	},
	"junshengxie": {
		avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/6b5c6ce7-ade9-4dd1-86dc-04528606a78e-profile_image-150x150.png",
		title: "Chinese translation",
		// curseforge: junshengxie
		// commit: 168b4e5d6429677069a693002a59814ac16b43bc
	},
	"Lev": {
		avatar: "https://cdn.discordapp.com/avatars/574065302736863232/4f9c17b6c1a607f5ab0ab74eae8aa1d3.png",
		title: "Brazilian translation",
		// discord: lev6987
		// commit: 1b8ccedb3d2b106fef78ce94578fd94db8cfcef7
	},
	"JosipFX": {
		avatar: "https://github.com/JosipFX1.png",
		title: "Croatian translation",
		links: [
			{ icon: "github", link: "https://github.com/JosipFX1" }
		]
		// discord: josipfx
		// commit: 00cea4d88a01ad8bc38d98ac5bba1a0e2e4d47d5
	},
};

export function getContributors(names: string[]): DefaultTheme.TeamMember[] {
	return names.map(name => ({name, ...contributors[name]}));
}