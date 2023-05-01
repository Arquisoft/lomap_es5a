Feature: Adding a new Point

Scenario: The user is registered and no introduce data
  Given A registered user and no data
  When I navigate to the page and i press publish
  Then An error message is shown in the screen

  Scenario: The user is logged and have data
  Given A logged user and a name
  When i fill the form and i presh publish
  Then I go to home page

