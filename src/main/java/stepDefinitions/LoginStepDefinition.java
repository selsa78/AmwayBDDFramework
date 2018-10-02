package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginStepDefinition {

    WebDriver driver;



    @Given("^user is already on Login page$")
    public void userAlreadyOnLoginPage(){
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\sergei_selivanov\\Downloads\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("https://www.amway.com/account/sso/login?fromURI=https%3A%2F%2Famwaysso.okta.com%2Fapp%2Famwayssoproduction_amwayusecommerce_1%2Fexk2w2lctcIIaugdY0x7%2Fsso%2Fsaml");
    }

    @When("^title of Login page is \"Вход или регистрация\"$")
    public void titleOfLoginPageIsEnterOrRegistration(){
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("", title);
    }
    @Then("^user enters login\"(.*)\"$")
    public void user_enters_login(String username){
        driver.findElement(By.name("UserName")).sendKeys(username);
    }

    @Then("^user enters password\"(.*)\"$")
    public void user_enters_password(String password){
        driver.findElement(By.name("Password")).sendKeys(password);
    }

    @Then("^user click on login button$")
    public void user_click_on_login_button(){
        WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginBtn);
    }
    @Then("^user is logged$")
    public void user_is_logged(){
        String title = driver.getTitle();

  }


}
