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
//Function selector object
const randFuncSel = {
  numerals: getRandNum,
  lower: getRandLow,
  upper: getRandUp,
  specialchar: getRandSpecial,
  }

//Functions

//generate numerals
function getRandNum(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

//generate lowercase characters
function getRandLow() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//generate uppercase characters
function getRandUp() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//generate special characters
function getRandSpecial() {
  const specialCharAll = '`~!@#$%^&*()_+-=[]{}\/;:,.';
  return specialCharAll[Math.floor(Math.random() * specialCharAll.length)];
}

console.log(getRandNum());