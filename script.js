// Assignment Code
var generateBtn = document.querySelector("#generate"); 
//Define Variables
var randomPass = "";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numberChar = "0123456789";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowChar = "0123456789";
var charSet = "";


// Write generator function
function generatePassword() 

{
 
    var length = prompt("How many characters long would you like your password to be? Enter a number between 3 and 9"); 
    //console.log(length);

    // Write special character prompt
    var userInputSpecial = confirm("Would you like to use special characters?"); 
   
    if (userInputSpecial) {
        charSet +=specialChar;
      } 

    // Write number character confirm
    var userInputNumber = confirm("Would you like to use numbers?"); 
    
    if (userInputNumber ) {
        charSet +=numberChar;
      }

    // Write uppercase character confirm
    var userInputUpper = confirm("Would you like to use uppercase characters?");

    if (userInputUpper) {
        charSet +=upperChar;
      }

    // Write lowercase character confirm
    var userInputLow = confirm("Would you like to use lowercase characters?"); 
    if (userInputLow) {
        charSet +=lowChar;
    }
  
// Write password to the #password input
function writePassword(){ 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
} 

generateBtn.addEventListener("click", writePassword); 
