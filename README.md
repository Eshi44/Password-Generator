# Password-Generator

This browser-based app will randomly generate a password based on user-selected criteria. 

!(images\Password-Generator-Image.PNG)

Once a user clicks the button to generate a new password, the user is prompted for information regarding the password's criteria. 
The user is asked the length of the of the password and is then asked to confirm if they would like to include special characters, numbers, lowercase characters, and uppercase characters. 
Based on the criteria submitted, a random password is generated within the text box.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Improvements

One major improvement would be to add a reset function, so if the user would like to generate another password, the previously generated password would reset. As of now, the generated password does not reset and the user woukd have to refresh the page. 
Another 'improvement' could be to alert the user of which criteria they selected before the password generates, but this could also be redundant for the user.



GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
