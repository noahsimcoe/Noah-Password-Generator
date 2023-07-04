// these are the initial arrays that will be pulled from for the desired character pool for the password
specialCharacters = ["!", "#", "?", "%", "&", "*", "^", "@", "(", ")", "/", "="];
numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// these are variables I'm creating at the global level so they can be used inside AND outside of functions
var containsLower = [];
var containsUpper = [];
var containsNumbers = [];
var containsSpecial = [];
var characterPool = [];
var password = [];

// this is the generate password function we were tasked with
function generatePassword() {
    var passwordLength = Number(window.prompt("Enter a number between 8 and 128"));
    characterPool = [];
    password = [];

    // this makes sure that the number entered was inbetween 8-12
    while (passwordLength > 128 || passwordLength < 8) {
      window.alert("The number you submitted is not between 8 and 128, please try again");
      var passwordLength = Number(window.prompt("Enter a number between 8 and 128"));
    }
      function containsWhat () {
        containsLower = window.confirm("Do you want to include lowercase characters");
        containsUpper = window.confirm("Do you want to include uppercase characters");
        containsNumbers = window.confirm("Do you want to include numberic characters");
        containsSpecial = window.confirm("Do you want to include special characters?");

        // this checks to make sure atleast one type of character has been selected
        if (!containsLower && !containsUpper && !containsNumbers && !containsSpecial) {
          window.alert("You must select atleast ONE character type");
          containsWhat();}

        // this sequence of code checks the user's input answers and adds certain arrays to the character pool
        if (containsLower)
        {characterPool.push(...lowerCaseCharacters);}

        if (containsUpper)
        {characterPool.push(...upperCaseCharacters);}

        if (containsNumbers)
        {characterPool.push(...numericCharacters);}

        if (containsSpecial)
        {characterPool.push(...specialCharacters);}

        }
      // calls the function
      containsWhat();

  // this loops through characterPool and adds the amount of characters selected to the password array
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

