Feature: SignUp to wdiodemo app

  Scenario Outline: SignUp into wdiodemo app

    Given I am on the home page
    When I tap on login navigationbar
    Then I should see login Page
    When I tap on Sign Up tab
    Then Sign Up page should display
    When I sign up with <username> and <password>
    Then I should see successful sign Up <message>
    Examples:
      | username       | password | message                     |
      | test@gmail.com | Test@123 | You successfully signed up! |
