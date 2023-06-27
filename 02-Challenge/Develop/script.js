// these are the initial arrays that will be pulled from for the desired character pool for the password
specialCharacters = ["!", "#", "?", "%", "&", "*", "^", "@", "(", ")", "/", "="];
numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function generatePassword() {
    var passwordLength = Number(window.prompt("Enter a number between 8 and 128"));
    // this makes sure that the number entered was inbetween 8-12
    while (passwordLength > 128 || passwordLength < 8) {
      window.alert("The number you submitted is not between 8 and 128, please try again");
      var passwordLength = Number(window.prompt("Enter a number between 8 and 128"));
    }
      var containsLower = window.confirm("Do you want to include lowercase characters");
      var containsUpper = window.confirm("Do you want to include uppercase characters");
      var containsNumbers = window.confirm("Do you want to include numberic characters");
      var containsSpecial = window.confirm("Do you want to include special characters?");

    // if no character types are selected, the function stops
    while (!containsLower && !containsUpper && !containsNumbers && !containsSpecial) {
      window.alert("You must select atleast ONE character type");
      var containsLower = window.confirm("Do you want to include lowercase characters");
      var containsUpper = window.confirm("Do you want to include uppercase characters");
      var containsNumbers = window.confirm("Do you want to include numberic characters");
      var containsSpecial = window.confirm("Do you want to include special characters?");
    }

  var characterPool = [];
  var password = [];

    // this sequence of code checks the user's input answers and adds certain arrays to the character pool
    if (containsLower) {
      characterPool.push(...lowerCaseCharacters);
    }

    if (containsUpper) {
      characterPool.push(...upperCaseCharacters);
    }

    if (containsNumbers) {
      characterPool.push(...numericCharacters);
    }

    if (containsSpecial) {
      characterPool.push(...specialCharacters);
    }

    // logs the pool and makes sure the correct arrays were added in characterPool
    console.log(characterPool);

  // this loops through characterpool and adds the amount of characters selected to the password array
  for (var i = 0; i < passwordLength; i++) {
    addedCharacter = characterPool[Math.floor(Math.random() * characterPool.length)];
    password.push(addedCharacter);
  }

  // returns the password and turns it into a string
  return password.join("");
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
// when you click the button the "writePassword" function is called
generateBtn.addEventListener("click", writePassword);
