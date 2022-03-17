// // Assignment Code
 let lengthOfPassword = 8;
 let lettersLower = ['abcdefghijklmnopqrstuvwxyz'];
 let lettersUpper = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
 let theNumbers = ['0123456789']; 
 let specialChar =['!#$%&()*-./;:<=>?@][^_`{|}~"'];
 let userChoice = [];

 let generateBtn = document.querySelector("#generate");
 //Add event listener to generate button 
 generateBtn.addEventListener("click", writePassword);

 function generatePassword() {
   console.log("button works");


   return "generated passwork will go here";
 }

// // Write password to the #password input
 function writePassword() {
   let validPrompts = prompts ();
   let password = generatePassword();
   let passwordText = document.querySelecto("#password");

   passwordText.value = password;

 }
function prompts(){
  userChoice = []
  promptLength = parseInt(prompt("How long would you like your password to be? (8 - 128)"));

   if(isNaN(lengthOfPassword) || lengthOfPassword < 8 || lengthOfPassword > 128) {
     alert("the length has to be a number between 8 and 128");
     return false;
   }
   if (confirm("would you like lowercase letters?")) {
     userChoice = userChoice.concat(lettersLower);
   }
   if (confirm("would you like uppercase letters?")) {
    userChoice = userChoice.concat(lettersUpper);
  }
  if (confirm("would you like special characters?")) {
    userChoice = userChoice.concat(specialChar);
  }
  if (confirm("would you like numbers?")) {
    userChoice = userChoice.concat(theNumbers);
  }
  return true;
}

// function writePassword() {
//     let password = generatePassword();
//     let passwordText = document.querySelector("#password");
//     prompts.promptLength; 
//     return; 
  
//     passwordText.value = password;

//   