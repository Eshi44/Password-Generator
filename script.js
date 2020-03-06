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
function generatePassword() {
 

  
// Write password to the #password input
function writePassword(){ 
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
} 

generateBtn.addEventListener("click", writePassword); 
