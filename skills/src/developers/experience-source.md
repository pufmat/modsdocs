Example experience source template using Yarn mappings:

```java
import net.minecraft.util.Identifier;
import net.puffish.skillsmod.api.SkillsAPI;
import net.puffish.skillsmod.api.calculation.Calculation;
import net.puffish.skillsmod.api.calculation.Variables;
import net.puffish.skillsmod.api.calculation.prototype.BuiltinPrototypes;
import net.puffish.skillsmod.api.calculation.prototype.Prototype;
import net.puffish.skillsmod.api.experience.ExperienceSource;
import net.puffish.skillsmod.api.experience.ExperienceSourceConfigContext;
import net.puffish.skillsmod.api.experience.ExperienceSourceDisposeContext;
import net.puffish.skillsmod.api.util.Problem;
import net.puffish.skillsmod.api.util.Result;

public class ExampleExperienceSource implements ExperienceSource {
	public static final Identifier ID = new Identifier("example", "example");

	private ExampleExperienceSource() {

	}

	public static void register() {
		SkillsAPI.registerExperienceSource(ID, ExampleExperienceSource::parse);
	}

	private static Result<ExampleExperienceSource, Problem> parse(ExperienceSourceConfigContext context) {
		return Result.success(new ExampleExperienceSource());
	}

	@Override
	public void dispose(ExperienceSourceDisposeContext context) {

	}
}

```

To add experience call this code.

```java
SkillsAPI.updateExperienceSources(
		/* instance of the player */,
		ExampleExperienceSource.class,
		experienceSource -> /* lambda that returns amount of experience to be added */
);
```

Example experience source template using Yarn mappings:

```java
import net.minecraft.util.Identifier;
import net.puffish.skillsmod.api.SkillsAPI;
import net.puffish.skillsmod.api.calculation.Calculation;
import net.puffish.skillsmod.api.calculation.Variables;
import net.puffish.skillsmod.api.calculation.prototype.BuiltinPrototypes;
import net.puffish.skillsmod.api.calculation.prototype.Prototype;
import net.puffish.skillsmod.api.experience.ExperienceSource;
import net.puffish.skillsmod.api.experience.ExperienceSourceConfigContext;
import net.puffish.skillsmod.api.experience.ExperienceSourceDisposeContext;
import net.puffish.skillsmod.api.util.Problem;
import net.puffish.skillsmod.api.util.Result;

public class ExampleExperienceSource implements ExperienceSource {
	private static final Identifier ID = new Identifier("example", "example");
	private static final Prototype<Data> PROTOTYPE = Prototype.create(ID);

	static {
		PROTOTYPE.registerProperty(
				new Identifier("example", "player"),
				BuiltinPrototypes.PLAYER.compose(Data::player)
		);
	}

	private final Calculation<Data> calculation;

	private ExampleExperienceSource(Calculation<Data> calculation) {
		this.calculation = calculation;
	}

	public static void register() {
		SkillsAPI.registerExperienceSource(ID, ExampleExperienceSource::parse);
	}

	private static Result<ExampleExperienceSource, Problem> parse(ExperienceSourceConfigContext context) {
		return context.getData()
				.andThen(JsonElement::getAsObject)
				.andThen(rootObject -> rootObject.get("variables")
						.andThen(variablesElement -> Variables.parse(
								variablesElement,
								PROTOTYPE,
								context
						))
						.andThen(variables -> rootObject.get("experience")
								.andThen(experienceElement -> Calculation.parse(
										experienceElement,
										variables,
										context
								))
						)
						.mapSuccess(ExampleExperienceSource::new)
				);
	}

	private record Data(ServerPlayerEntity player) {

	}

	public int evaluate(ServerPlayerEntity player) {
		return (int) Math.round(calculation.evaluate(new Data(player)));
	}

	@Override
	public void dispose(ExperienceSourceDisposeContext context) {

	}
}

```

To add experience call this code to evaluate the experience source calculation.

```java
SkillsAPI.updateExperienceSources(
		/* instance of the player */,
		ExampleExperienceSource.class,
		experienceSource -> experienceSource.evaluate(/* instance of the player */)
);
```