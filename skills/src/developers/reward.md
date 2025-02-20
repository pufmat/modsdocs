Example reward template using Yarn mappings:

```java
import net.minecraft.util.Identifier;
import net.puffish.skillsmod.api.SkillsAPI;
import net.puffish.skillsmod.api.reward.Reward;
import net.puffish.skillsmod.api.reward.RewardConfigContext;
import net.puffish.skillsmod.api.reward.RewardDisposeContext;
import net.puffish.skillsmod.api.reward.RewardUpdateContext;
import net.puffish.skillsmod.api.util.Problem;
import net.puffish.skillsmod.api.util.Result;

public class ExampleReward implements Reward {
	public static final Identifier ID = new Identifier("example", "example");

	private ExampleReward() {

	}

	public static void register() {
		SkillsAPI.registerReward(ID, ExampleReward::parse);
	}

	private static Result<ExampleReward, Problem> parse(RewardConfigContext context) {
		return Result.success(new ExampleReward());
	}

	@Override
	public void update(RewardUpdateContext context) {

	}

	@Override
	public void dispose(RewardDisposeContext context) {

	}
}
```