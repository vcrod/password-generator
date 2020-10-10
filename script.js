// Assignment code here


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
  var passwordLength = prompt("What is the length?", "8");
  console.log(passwordLength, typeof passwordLength);
  //    valid values are >=8 && <=128


  // prompt: lowercase, uppercase, numeric, and / or special characters
  var passwordChar = prompt("What characters would you like to use?");
  if (passwordChar == "String") {
    console.log("is a string")
    return "abc"
  }
  if (passwordChar == "Intiger") {
    console.log("is a intiger")
    return "123"
  } else {
    console.log("defaulting to a string")
    return "efg"
  }


  //    valid characters are 'lowercase', 'uppercase', 'numeric', 'special characters'

  // confirm: above

  // generate a password


  return 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
