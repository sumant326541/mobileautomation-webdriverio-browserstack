Feature: Login to wdiodemo app

  Scenario Outline: As a user, I can log into wdiodemo app

    Given I am on the home page
    When I tap on login navigationbar
    Then I should see login Page
    When I login with <username> and <password>
    Then I should see successful login <message>

    Examples:
      | username       | password  | message            |
      | test@gmail.com | Test@123! | You are logged in! |
