<script setup>
import { VPTeamMembers } from "vitepress/theme";

const contributors = [
	{
		avatar: "https://github.com/nageih.png",
		name: "nageih",
		title: "Chinese translation",
		links: [
			{ icon: "github", link: "https://github.com/nageih" }
		]
		// commit: 587d706afa84aa16749b870c9c71a22ffb5a9329
	},
	{
		avatar: "https://github.com/Potat369.png",
		name: "Potat",
		title: "Russian translation",
		links: [
			{ icon: "github", link: "https://github.com/Potat369" }
		]
		// commit: ce3ebe7ff496a8ffcd26ec31261670fa522b717e
	},
	{
		avatar: "https://github.com/RyoTagami.png",
		name: "Ryo TAGAMI",
		title: "Japanese translation",
		links: [
			{ icon: "github", link: "https://github.com/RyoTagami" }
		]
		// commit: 46669f0e9569f3157f8a3ab59abff287de7326bc
	},
	{
		avatar: "https://github.com/TheLegendofSaram.png",
		name: "Santiago Hernandez",
		title: "Mexican Spanish translation",
		links: [
			{ icon: "github", link: "https://github.com/TheLegendofSaram" }
		]
		// commit: 7896ad709594d7f5efb3c9e21671860a5489343c
	},
	{
		avatar: "https://github.com/smoong951.png",
		name: "smoong",
		title: "Korean translation",
		links: [
			{ icon: "github", link: "https://github.com/smoong951" }
		]
		// commit: 9c381d2ee7504fee8b06886a104870f2219a40fe
	}
]
</script>

# Contributors

<VPTeamMembers size="small" :members="contributors" />