/***?
 * author khalithb
 */

package MyRunner;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.PickleEventWrapper;
import utils.ComonServiceLib;

@CucumberOptions(features = "src/test/java/Features", strict = true, glue = { "stepDefinitions" }, tags = {
		"@PETNotPetFound" }, plugin = { "pretty", "html:target/cucumber-reports/cucumber-pretty",
				"json:target/cucumber-reports/CucumberTestReport.json", "rerun:target/cucumber-reports/rerun.txt" })
@Listeners({ FailListener.class })
public class TestRunner extends ComonServiceLib {

	@Test(groups = "cucumber", description = "Runs Cucumber Scenarios", dataProvider = "scenarios")
	public void RunScenario(PickleEventWrapper pickleWrapper, CucumberFeatureWrapper featureWrapper) throws Throwable {
		testNGCucumberRunner.runScenario(pickleWrapper.getPickleEvent());

	}

	@DataProvider
	public Object[][] scenarios() {
		return testNGCucumberRunner.provideScenarios();

	}

}