package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\sergei_selivanov\\VTBBDDFramework\\src\\main\\java\\Features",
        glue = {"stepDefinitions"},
        format = {"pretty", "html:test-outout"},
        dryRun = false,
        strict = true
)
public class TestRunner {

}
