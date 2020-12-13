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
//Output and results

//Function selector object 
//IN PROGRESS DOES NOT WORK
const randFuncSel = {
  numerals: getRandNum,
  lower: getRandLow,
  upper: getRandUp,
  specialchar: getRandSpecial,
};

//Functions

//generate numerals
function getRandNum(min, max) {
  min = Math.ceil(0);
  max = Math.floor(9);
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

//password parameters

//password length loop and alert
do {
  var passLength = parseInt(window.prompt("Choose password length between 8 to 128 characters.", ""), 10);
}
while (isNaN(passLength) || passLength > 128 || passLength < 8);

alert("Your password will be " + passLength + " characters long.");