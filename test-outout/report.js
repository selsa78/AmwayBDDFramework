$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Amway login feature",
  "description": "",
  "id": "amway-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "VTB login test scenario",
  "description": "",
  "id": "amway-login-feature;vtb-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is already on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "title of Login page is \"Вход или регистрация\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user enters login\"selsaamway\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user enters password\"asles1978\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is logged",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.userAlreadyOnLoginPage()"
});
formatter.result({
  "duration": 6128134675,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.titleOfLoginPageIsEnterOrRegistration()"
});
formatter.result({
  "duration": 12920059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selsaamway",
      "offset": 18
    }
  ],
  "location": "LoginStepDefinition.user_enters_login(String)"
});
formatter.result({
  "duration": 91729094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asles1978",
      "offset": 21
    }
  ],
  "location": "LoginStepDefinition.user_enters_password(String)"
});
formatter.result({
  "duration": 84470859,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_on_login_button()"
});
formatter.result({
  "duration": 4613055232,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_logged()"
});
formatter.result({
  "duration": 8366057,
  "status": "passed"
});
});