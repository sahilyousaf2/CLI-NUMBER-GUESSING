#! /usr/bin/env node
import inquirer from "inquirer";

//  1) Computer Will Generate A Random Number
//  2) User  Input For Guesssing Number 
//  3)  Compare User Input With Computer Generated Number And Show Result

const randomNumber=Math.floor(Math.random()*10)+1; //Generates a random number between 1 and 10 (Inclusive).
console.log("Welcom To Number Guessing Game");

const answer = await inquirer.prompt([
    {name:"userGuessedNumber",
    type:"number",
    message:"Please Guess A Number"
    }
])

if (answer.userGuessedNumber==randomNumber) {
    console.log("Congratulations You Are Winner");
    
} else {
    console.log("Your Lose");
    
}