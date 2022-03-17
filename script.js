// // Assignment Code
 let generateBtn = document.querySelector("#generate");
 let lengthOfPassword = 8;
 let lettersLower = ['abcdefghijklmnopqrstuvwxyz'];
 let lettersUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
 let theNumbers = ['0123456789']; 
 let specialChar =['!#$%&()*-./;:<=>?@][^_`{|}~"'];
 let userChoice = [];


 function generatePassword() {
   console.log("button works");

   
   return "generated passwork will go here";
 }

// // Write password to the #password input
 function writePassword() {
   let password = generatePassword();
   let passwordText = document.querySelector("#password");

   passwordText.value = password;

 }

 //Add event listener to generate button 
 generateBtn.addEventListener("click", writePassword);




//   // unable to place \ as well as " (in sepcialChar)


// let prompts = {
//   promptLength: ("How long would you like your password to be?"),
//   promptLetter: ("Would you like to include + //letters, numbers, special)")

// }

// function writePassword() {
//     let password = generatePassword();
//     let passwordText = document.querySelector("#password");
//     prompts.promptLength; 
//     return; 
  
//     passwordText.value = password;

//   