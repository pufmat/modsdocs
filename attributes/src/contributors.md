<script setup>
import { VPTeamMembers } from "vitepress/theme";
import { getContributors } from "../../contributors.ts";

const contributors = getContributors([
	"nageih",
	"Potat",
	"Ryo TAGAMI",
	"Santiago Hernandez",
	"smoong",
]);
</script>

# Contributors

<VPTeamMembers size="small" :members="contributors" />