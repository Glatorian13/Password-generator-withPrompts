// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//my code move later

//Functions
console.log(getRandSpecial());

//generate lowercase characters
function getRandLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
//generate uppercase characters
function getRandUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//generate numerals
function getRandNum() {
  return String.fromCharCode(Math.floor(Math.random()) * 10 + 48)
}
//generate special characters
function getRandSpecial() {
  const specialChar = '`~!@#$%^&*()_+-=[]{}\/;:,.';
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}



console.log();