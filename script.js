// // Assignment Code
// let generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// // generateBtn.addEventListener("clik writePassword);


let password = {
  length: (8-128),
  letters: ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  number: ("0123456789"),
  special: ("!#$%&'()*-./;:<=>?@[]^_`{|}~"),
  // unable to place \ as well as " (in sepcialChar)
}