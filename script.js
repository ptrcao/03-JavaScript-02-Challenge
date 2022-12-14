var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// for the function  we use, we don't need the characters as separate array elements - instead we join them into a string, for each char type
var specialCharacters = specialCharacters.join("");

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// for the function  we use, we don't need the characters as separate array elements - instead we join them into a string, for each char type
var numericCharacters = numericCharacters.join("");

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// for the function  we use, we don't need the characters as separate array elements - instead we join them into a string, for each char type
var lowerCasedCharacters = lowerCasedCharacters.join("");

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// for the function  we use, we don't need the characters as separate array elements - instead we join them into a string, for each char type
var upperCasedCharacters = upperCasedCharacters.join("");

// Assignment code here

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from

function generatePassword() {
  // length of at least 8 characters and no more than 128 characters

  const valid_lengths = range(8, 128, 1);

  var pwLength = parseInt(document.getElementById("char_length").value);

  // whether or not to include lowercase, uppercase, numeric, and/or special characters
  // Check if at least one checkbox is checked without clicking
  // https://stackoverflow.com/a/44559358/9095603
  var atLeastOneCheckboxIsChecked =
    document.querySelectorAll('input[type="checkbox"]:checked').length > 0;
  // The full set of chosen_char_types is ['abcdefghijklmnopqrstuvwxyz','ABCDEFGHIJKLMNOPQRSTUVWXYZ','0123456789','@%+\/'!#$^?:,)(}{][~-_.']
  // The user will choose some subset of this array

  if (!valid_lengths.includes(pwLength) && atLeastOneCheckboxIsChecked) {
    window.alert(
      "Invalid input.  Please try again.  Please input a password length that is an integer between 8 and 128 characters."
    );
    return;
  } else if (valid_lengths.includes(pwLength) && !atLeastOneCheckboxIsChecked) {
    window.alert(
      "Invalid input.  Please try again.  You need to select at least one character type."
    );
    return;
  } else if (
    !valid_lengths.includes(pwLength) &&
    !atLeastOneCheckboxIsChecked
  ) {
    window.alert(
      "Invalid inputs.  Please try again.  You need a password length that is an integer between 8 and 128 characters AND you need to select at least one character type."
    );
    return;
  } else if (valid_lengths.includes(pwLength) && atLeastOneCheckboxIsChecked) {
    var lowercasePref = document.getElementById("lowercase").checked;
    var uppercasePref = document.getElementById("uppercase").checked;
    var numericPref = document.getElementById("numeric").checked;
    var special_charPref = document.getElementById("special_char").checked;

    var chosen_char_types = [];

    if (lowercasePref) {
      chosen_char_types.push(lowerCasedCharacters);
    }

    if (uppercasePref) {
      chosen_char_types.push(upperCasedCharacters);
    }

    if (numericPref) {
      chosen_char_types.push(numericCharacters);
    }

    if (special_charPref) {
      chosen_char_types.push(specialCharacters);
    }
  }

  let password = "";

  // This next block guarantees at least one of each type of character is used straight up
  for (let j = 0; j < chosen_char_types.length; j++) {
    // for each char type
    password += chosen_char_types[j].charAt(
      Math.floor(Math.random() * chosen_char_types[j].length)
    );
    // pick a random character from the string for each char type
  }

  // For the remaining password characters, after one of each type of character has already been picked once (unless pw length is shorter than the number of char types, which is not the case in our scenario as pw is at least 8 char), do:
  if (pwLength > chosen_char_types.length) {
    pwLength = pwLength - chosen_char_types.length;
    for (let i = 0; i < pwLength; i++) {
      const index = Math.floor(Math.random() * chosen_char_types.length);
      password += chosen_char_types[index].charAt(
        Math.floor(Math.random() * chosen_char_types[index].length)
      );
    }
  }

  return password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  // pull the pw string apart again, reshuffle it, and join it back together

  // https://stackoverflow.com/a/74107395/9095603
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
