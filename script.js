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

function getComputerChoice() {
   const choiceArr = ["rock", "paper", "scissors"];
   return choiceArr[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection) {
    playerSelection = prompt("Rock, Paper or Scissors?", "");
    return playerSelection.toLowerCase();
}
