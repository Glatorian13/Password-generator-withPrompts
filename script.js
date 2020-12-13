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

//additonal variables to declare
var pwGenHolder = "";
var passLength = 0;
//self-randomizing variables
//generate numerals
var getRandNum = function funcRandNum(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate lowercase characters
var getRandLow = function funcRandLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//generate uppercase characters
var getRandUp = function funcRandUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generate special characters
var getRandSpecial = function funcRandSpecial() {
  const specialCharAll = '`~!@#$%^&*()_+-=[]{}\/;:,.';
  return specialCharAll[Math.floor(Math.random() * specialCharAll.length)];
}

//password parameters

//password length prompt
var passLength = parseInt(prompt("Choose password length between 8 and 128.", ""));

//int needed as password length value
while (isNaN(passLength)) {
  var passLength = parseInt(prompt("Hmm, that is not a number. Enter a number between 8 to 128.", ""));
}
//check password length
while (passLength < 8 || passLength > 128) {
  var passLength = parseInt(prompt("Re-enter length of password, must be between 8 and 128.", ""));
}
//alert user to password length
alert("Your password will be " + passLength + " characters long.");

//confirmation prompts
var userSelLower = confirm("Include lowercase letters?");
var userSelUpper = confirm("Include uppercase letters?");
var userSelNum = confirm("Include numbers?");
var userSelSpecial = confirm("Include special characters?");

//call funtions to generate password
//function generatePassword() {
// if (userSelLower) {
//   pwGenHolder += getRandLow;
// }
//  if (userSelUpper) {
//    pwGenHolder += getRandUp;
//  }
// if (userSelNum) {
//   pwGenHolder += getRandNum
// }
// if (userSelSpecial) {
//   pwGenHolder =+ getRandSpecial;
// }
// for (let i = 0; < passLength; i++) {
//   
//  }
//}

console.log(passLength);