// Assignment code here

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [Math.floor(Math.random() * 128)];
var specialChar = ["!","#","$","%","&","*","+",",","-",".","/","\"",":",";","<","=",">","?","@","["];

function generatePassword() {
    var confirmLength = window.prompt("password length?");
 
    while(confirmLength <=7 || confirmLength >= 129) {
      alert("must be between 8-128 characters");
      var confirmLength = (prompt("password length?"));
  }

  alert(`Your password will have ${confirmLength} characters`);

    var confirmLower = confirm("Lowercase?");
    var confirmUpper = confirm("Uppercase?");
    var confirmNum = confirm("Numbers?");    
    var confirmSpecial = confirm("Special Characters?");
  while(confirmLower === false && confirmUpper === false && confirmNum === false && confirmSpecial) {
    alert("must choose at leaset one");
    var confirmLower = confirm("Lowercase?");
    var confirmUpper = confirm("Uppercase?");
    var confirmNum = confirm("Numbers?");    
    var confirmSpecial = confirm("Special Characters?");
  }

  var password = []
      
  if (confirmLower) {
    password = password.concat(lowercase)
  }

  if (confirmUpper) {
    password = password.concat(uppercase)
  }
    
  if (confirmNum) {
    password = password.concat(number)
  }

  if (confirmSpecial) {
    password = password.concat(specialChar)
  }

  console.log(password) 

  var random = ""

  for (var i = 0; i < confirmLength; i++) {
  var random = random + password[Math.floor(Math.random() * password.length)];
    console.log(random)
  }
  return random;
  

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button

document.getElementById("generate").addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

