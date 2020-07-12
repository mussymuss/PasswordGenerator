// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//     var password = generatePassword();
// }

function writePassword(){
  getPasswordlenght();
  getOptions();
  finalPass();  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//array lowercase letters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//array numbers
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//array special characters
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "="];
//array uppercase letters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variables
var passLength = 0;
var charSelected = [];
var randomChar = 0;
var final = "";

// Prompt&Confirms
function getPasswordlenght() {
  passLength = prompt("Choose a length of at least 8 characters and no more than 128 characters");

  // Password Length
  passLength  = parseInt(passLength);
  

  while (passLength <= 7 || passLength >= 129) {
      alert("Try again. Must be a number between 8 and 128.");
      getPasswordlenght();
      }
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
    getPasswordlenght();
  }
  console.log(passLength);
}

function getOptions(){
    // Special Characters
    var specialCharacters = confirm(
      'Would you like your password to include special characters.'
    );
  
    // Numeric Characters
    var numericCharacters = confirm(
      'Would you like your password to include numeric characters.'
    );
  
    // Lowercase characters
    var lowerCaseCharacters = confirm(
      'Would you like your password to include lowercase characters.'
    );
  
    // Uppercase characters
    var upperCaseCharacters = confirm(
      'Would you like your password to include uppercase characters.'
    );
  

  if (lowerCaseCharacters) {
      lowerArr = charSelected.concat(lowercase);
      charSelected = lowerArr;
  };

  if (upperCaseCharacters) {
      upperArr = charSelected.concat(uppercase);
      charSelected = upperArr;
  };

  if (numericCharacters) {
      numberArr = charSelected.concat(number);
      charSelected = numberArr;
  };

  if (specialCharacters) {
      specialArr = charSelected.concat(special);
      charSelected = specialArr;
  };

    // Check
    if (
      specialCharacters === false &&
      numericCharacters === false &&
      lowerCaseCharacters === false &&
      upperCaseCharacters === false
    ) {
      alert('Need at least one character type');
      return getOptions();
    }
};

function finalPass(){
  for (var i = 0; i < passLength; i++) {
    randomChar = Math.floor(Math.random() * charSelected.length);
    final += charSelected[randomChar];
};



var password = final;
var passwordText = document.querySelector("#password");

passwordText.value=password;
}

//function to copy password to clipboard
function copyClipboard() {
  copyPassword();
};

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Password Copied to Clipboard")
};
