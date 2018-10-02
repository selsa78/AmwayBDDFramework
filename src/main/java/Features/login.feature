Feature: Amway login feature
  Scenario: VTB login test scenario
    Given user is already on Login page
    When title of Login page is "Вход или регистрация"
    Then user enters login"selsaamway"
    And user enters password"asles1978"
    Then user click on login button
    Then user is logged