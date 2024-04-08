#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
//  1) Computer Will Generate A Random Number
//  2) User  Input For Guesssing Number 
//  3) Compare User Input With Computer Generated Number And Show Result
console.log(chalk.magentaBright.bold("\n \t Welcome To Number Guessing Game \n"));
let condition = true;
while (condition) {
    const randomNumber = Math.floor(Math.random() * 10 + 1); //Generates a random number between 1 and 10 (Inclusive).
    const answer = await inquirer.prompt([
        {
            name: "userGuessedNumber",
            type: "number",
            message: chalk.greenBright.italic("Please Guess A Number")
        }
    ]);
    if (answer.userGuessedNumber == randomNumber) {
        console.log(chalk.blueBright.bold(`\t"Congratulations You Are The Winner"\n`));
    }
    else {
        console.log(chalk.redBright.bold(`\t"You Lose"\n`));
        console.log(chalk.yellow.bold(`"The Correct Number Is"`), randomNumber);
    }
    let restartAns = await inquirer.prompt([
        {
            name: "restart",
            type: 'confirm',
            message: chalk.yellowBright.italic("Do You Want To Play Again?"),
            default: true
        }
    ]);
    condition = restartAns.restart;
}
;
