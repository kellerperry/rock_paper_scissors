
// Randomly select and return the computer's choice:

function getComputerChoice() {
    const choiceArr = ["rock", "paper", "scissors"];
    return choiceArr[Math.floor(Math.random() * 3)];
}
  
/* Prompt for and lowercase the user's selection. 
        // let playerPrompt = prompt("Rock, Paper or Scissors?", "");
        // playerSelection = playerPrompt.toLowerCase();

    // //Link the computerSelection parameter with the outcome of getComputerChoice
        // computerSelection = getComputerChoice(); */

function game() {

    
}

        
// One round of Rock, Paper, Scissors

function playRound(playerSelection, computerSelection) {

    //Compare the competing selections and return a string declaring the winner

    const prettyPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    const prettyComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if(
        (computerSelection === "rock" && playerSelection === "scissors") ||(computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
            return `You lose! ${prettyComputerSelection} beats ${prettyPlayerSelection}`;
    } else if(
        (computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
            return `It's a draw! You both chose ${prettyPlayerSelection}`
    } else {
        return `You win! ${prettyPlayerSelection} beats ${prettyComputerSelection}`
    }


}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));




/* Compare the user's selection to the computer's selection:
        Rock is greater than Scissors
        Scissors is greater than Paper
        Paper is greater than Rock
        If Paper equals Paper or Rock equals Rock or Scissors equals Scissors, the game is a draw.
    Return a string that declares the player a winner, a loser or if the game is a draw.
Loop through the one round of game to create a five-round game:
    Initialize a player score counter and a computer score counter
    After comparing the player's selection to the computer's selection increment the round winner's counter.
    Log the round-end string to the console.
    After a fifth round is completed, compare the player's score counter to the computer's score counter.
    Log the game winner to the console */







/*
Randomly select and return Rock, Paper or Scissors for the computer's choice:
    Create an array of strings: "rock", "paper", "scissors";
    The computer's choice variable gets the randomly selected index from the string array;
    Return the computer's choice;
Create one round of rock, paper, scissors
    Prompt the user for their selection.
        Revert the user's selection to be case-insensitive;
        Return the player's selection;
    Compare the user's selection to the computer's selection:
        Rock is greater than Scissors
        Scissors is greater than Paper
        Paper is greater than Rock
        If Paper equals Paper or Rock equals Rock or Scissors equals Scissors, the game is a draw.
    Return a string that declares the player a winner, a loser or if the game is a draw.
Loop through the one round of game to create a five-round game:
    Initialize a player score counter and a computer score counter
    After comparing the player's selection to the computer's selection increment the round winner's counter.
    Log the round-end string to the console.
    After a fifth round is completed, compare the player's score counter to the computer's score counter.
    Log the game winner to the console */