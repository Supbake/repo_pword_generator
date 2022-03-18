# Randomized Password Generator 

Screen shot is linked in the develop folder to show image of site. 

I have created a password randomizer based on starter code given to me. I was able to create 3 functions that give prompts, write a password and generate a password for the user given 5 seprate pramaters. I allow the user to select the length of their password from 8-128 characters, uppercase and lowercase letters, numbers, and special characters. Then my function will take in that users data selections and given their pramaters generate their own unique password. 

I was able to do this using this line of code below;

    for (let i = 0 ; i < lengthOfPassword; i++) {
    let passswordindex = Math.floor(Math.random() * userChoice.length);
     password = password + userChoice[passswordindex];

![alt text](./Develop/03-javascript-homework-demo.png)