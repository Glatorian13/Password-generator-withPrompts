// Assignment Code
var generateBtn = document.querySelector("#generate");
//additonal variables to declare
var passLength;
var upperCheck;
var numCheck;
var specialCheck;
var generatePassword = ""
// Write password to the #password input
function writePassword() {
  const pwLength = +passLength.value;
  const hasLower = userSelLower;
  const hasUpper = userSelUpper;
  const hasNum = userSelNum;
  const hasSpecial = userSelSpecial;


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

;

const getRandAll = {
  numbers: getRandNum,
  lowerchar: getRandLow,
  upperchar: getRandUp,
  specialchar: getRandSpecial,
};

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

//password parameters


//password length prompt
var passLength = parseInt(prompt("Choose password length between 8 and 128.", ""));{

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

//call funtions to generate password

//password function
function generatePassword(userSelLower, userSelUpper, userSelNum, userSelSpecial, passLength) {
  let yourPassword = "";
  
  const passTypeCount = userSelLower + userSelUpper + userSelNum + userSelSpecial + passLength;
  console.log("types count: ", passTypeCount);
  const passTypesArr = [{userSelLower}, {userSelUpper}, {userSelNum}, {userSelSpecial}, {passLength}].filter
  (
    item => Object.values(item)[0]
  );

  console.log("typesArr: ", passTypesArr);

  if(typesCount === 0) {
    return "";
  }

  for(let i = 0; i < passLength; i += passTypeCount) {
    passTypesArr.forEach(type => {

      const funcName = Object.keys(type)[0];

      console.log("funcName: ", funcName);

      yourPassword += getRandAll[funcName]();
    });
  }

  console.log(yourPassword.slice(0, passLength));
  }

