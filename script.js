// Assignment code here

// character arrays
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbol = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", " < ", "=", " > ", " ? ", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// input confirm declarations
var confirmPasswordLength = '';
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSymbol;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // todo: prompt: what is the length?
  var confirmPasswordLength = (prompt("Desired length of password? \nEnter a number between 8 - 128."));
  // loop for invalid user input
  while (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
    alert("Not valid length. Please enter a number between 8 and 128.");
    var confirmPasswordLength = (prompt("Desired length of password? \nEnter a number between 8 - 128."));
  }

  // input for letter options
  var confirmLowercase = confirm("Select OK if you want to include lowercase letters in your generated password.");
  var confirmUppercase = confirm("Select OK if you want to include UPPERCASE letters in your generated password.");
  // input for numeric and symbol options
  var confirmNumeric = confirm("Select OK if you want to include numbers in your generated password.");
  var confirmSymbol = confirm("Select OK if you want to include symbols in your generated password.");

  // loop for invalid response
  while (confirmSymbol === false && confirmNumeric === false && confirmLowercase === false && confirmUppercase === false) {
    alert("You MUST choose at least one option.");
    var confirmLowercase = confirm("Select OK if you want to include lowercase letters in your generated password.");
    var confirmUppercase = confirm("Select OK if you want to include UPPERCASE letters in your generated password.");
    var confirmNumeric = confirm("Select OK if you want to include numbers in your generated password.");
    var confirmSymbol = confirm("Select OK if you want to include symbols in your generated password.");
  }

  var passwordCharacters = []
  debugger
  // concat arrays
  if (confirmLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase)
  }
  if (confirmUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  }
  if (confirmNumeric) {
    passwordCharacters = passwordCharacters.concat(numeric)
  }
  if (confirmSymbol) {
    passwordCharacters = passwordCharacters.concat(symbol)
  }

  console.log(passwordCharacters)

  // empty string for loop 
  var randomPassword = "";

  for (var i = 0; i < confirmPasswordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }

  return randomPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
