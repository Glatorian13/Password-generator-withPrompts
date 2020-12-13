// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(numerals, lower, upper, specialchar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//my code move later
//Output and results

//undef vars???
var pwL;

//Function selector object 
const randFuncSel = {
  numerals: getRandNum,
  lower: getRandLow,
  upper: getRandUp,
  specialchar: getRandSpecial,
};

//event listener based on given code?



//Functions

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

//password length function, needs to be called to run
var passLength = function funcPwLength() {
  do {
    var pwL = parseInt(window.prompt("Choose password length between 8 to 128 characters.", ""), 10);
  }
  while (isNaN(pwL) || pwL > 128 || pwL < 8);
  alert("Your password will be " + pwL + " characters long.");
  return pwL;
}

//confirmation prompts
var userSelLower = confirm("Include lowercase letters?");
var userSelUpper = confirm("Include uppercase letters?");
var userSelNum = confirm("Include numbers?");
var userSelSpecial = confirm("Include special characters?");