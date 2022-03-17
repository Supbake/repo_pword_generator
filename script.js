// // Assignment Code
 let lengthOfPassword = 8;
 let lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
 let lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
 let theNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',]; 
 let specialChar =['!', '#', '$', '%', '&', '(', ')', '*', '-', '.', '/', ';', ':', '<', '=', '>', '@', ']', '[', '^', '_', '`', '{', '|', '}', '~', '"',];
 let userChoice = [];
 let generateBtn = document.querySelector("#generate");
 generateBtn.addEventListener("click", writePassword);

 function generatePassword() {
  let password = "";
  for (let i = 0 ; i < lengthOfPassword; i++) {
    let passswordindex = Math.floor(Math.random() * userChoice.length);
    password = password + userChoice[passswordindex];
  }
  console.log(password)
  return password;
}

 function writePassword() {
  let validPrompt = prompts();
  let passwordInput = document.querySelector("#password");

   if(validPrompt) {
     let userPassword = generatePassword();
     passwordInput.value = userPassword;
   } else {
    passwordInput.value = "please try again.";
   }
}
 
function prompts() {
  lengthOfPassword = parseInt(prompt("How long would you like your password to be? (8 - 128)"));

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