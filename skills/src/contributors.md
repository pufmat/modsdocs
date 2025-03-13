<script setup>
import { VPTeamMembers } from "vitepress/theme";
import { getContributors } from "../../contributors.ts";

const contributors = getContributors([
	"XxZenk",
	"Cape-City",
	"Potat",
	"Heimdallr-1",
	"Santiago Hernandez",
	"nageih",
	"Ryo TAGAMI",
	"smoong",
	"junshengxie",
	"Lev",
]);
</script>

# Contributors

<VPTeamMembers size="small" :members="contributors" />