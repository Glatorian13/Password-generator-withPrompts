// Assignment Code
var generateBtn = document.querySelector("#generate");
//additonal variables to declare
//var passLength;
//var generatePassword = ""

//password parameters
//password length prompt
var passLength = parseInt(prompt("Choose password length between 8 and 128.", "")); {

  //int needed as password length value
  while (isNaN(passLength)) {
    passLength = parseInt(prompt("Hmm, that is not a number. Enter a number between 8 to 128.", ""));
  }
  //check password length
  while (passLength < 8 || passLength > 128) {
    passLength = parseInt(prompt("Re-enter length of password, must be between 8 and 128.", ""));
  }
  //alert user to password length
  alert("Your password will be " + passLength + " characters long.");
}
//console.log(passLength);
//declare passLength
//passLength = pwL.value;

//confirmation prompts
var userSelLower = confirm("Include lowercase letters?");
var userSelUpper = confirm("Include uppercase letters?");
var userSelNum = confirm("Include numbers?");
var userSelSpecial = confirm("Include special characters?");
const getRandAll = {
  numbers: getRandNum,
  lowerchar: getRandLow,
  upperchar: getRandUp,
  numbers: getRandNum,
  specialchar: getRandSpecial,
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  const pwLength = +passLength.value;
  const hasLower = userSelLower;
  const hasUpper = userSelUpper;
  const hasNum = userSelNum;
  const hasSpecial = userSelSpecial;
  //enter password result into password variable
  var password = generatePassword(hasLower, hasUpper, hasNum, hasSpecial, pwLength);
  console.log(password);
}

//password function
function generatePassword(lowerchar, upperchar, numbers, specialchar, pwLength) {
  var yourPassword = "";
  const typePassCount = lowerchar + upperchar + numbers + specialchar;
  const typePassArr = [{ lowerchar }, { upperchar }, { numbers }, { specialchar }].filter(item => Object.values(item)[0]);
  console.log("marker: 1 ");

  if (typePassCount === 0) {
    return "";
  }

  //loop through length of password
  for (let i = 0; i < pwLength; typePassCount) {
    typePassArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      yourPassword += getRandAll[funcName]();
    });
  }

  const endPass = yourPassword.slice(0, pwLength);

  return endPass;
}

//self-randomizing variables
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
  const specialChar = '`~!@#$%^&*()_+-=[]{}\/;:,.<>';
  return specialChar[Math.floor(Math.random() * specialChar.length)];
}