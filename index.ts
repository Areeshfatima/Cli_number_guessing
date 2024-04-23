#! /usr/bin/env node
import inquirer from "inquirer";

const random_number = Math.floor(Math.random() * 6 + 1);

console.log("Welcome To Number Guessing Game...")


const answer = await inquirer.prompt([{
    name: "userNumberGuessed",
    type: "number",
    message: "Kindly guess any number between 1-6",
}]);
if (answer.userNumberGuessed === random_number){
    console.log("Congratulation You guessed a correct number..");
}
else{
    console.log("Opps hard luck you guessed a wrong number..");
}

