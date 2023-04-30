Feature: Registering a new user

Scenario: The user is not logged and introduces wrong data
  Given A not logged user
  When I fill wrong data in the form and press submit
  Then An error message is shown in the screen

Scenario: The user is registered in the site
  Given A registered user
  When I fill the data in the form of login and press submit
  Then The page of the map is shown in the screen