#! /usr/bin/env node
export{};
import inquirer from "inquirer";
let winningNumber : any = 50;
let userGuess :any = await inquirer.prompt([{
message:"Guess a number:",
type: "number",
name:"num"
}]);
if (userGuess.num == winningNumber) {
    console.log("Your guess is Right!!");
}
else {
    if (userGuess.num > winningNumber) {
        console.log("You are too HIGH!, Try a small number.");
    }
    else {
        console.log("You are too LOW!, Try a large number. ");
    }
}