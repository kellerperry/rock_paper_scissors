let playerScore = 0;
let computerScore = 0;

let scoreBox = document.querySelector('#display-score');
let score = document.querySelector("#score");
let results = document.querySelector("#results");
let selectionBox = document.querySelector('#selection-box');
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

score.innerText = `Player Score: ${playerScore}
    Computer Score: ${computerScore}`;
    
scoreBox.appendChild(score);
scoreBox.appendChild(results);


selectionBox.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id) {
        case 'rock' :
            playerSelection = 'rock';
            break;
        case 'paper' :
            playerSelection = 'paper';
            break;
        case 'scissors' :
            playerSelection = 'scissors';
            break;
    }
    
    
    let roundResults = playRound(playerSelection, getComputerChoice());
    results.innerHTML = `${roundResults}`;
    scoreBox.appendChild(results);

    score.innerText = `Player Score: ${playerScore}
    Computer Score: ${computerScore}`;
    scoreBox.appendChild(score);

    if(computerScore === 5 || playerScore === 5) {
        if(computerScore > playerScore) {
            alert(`Oh no! You lost the game! ${playerScore} to ${computerScore}`);
        } else {
            alert(`Congratulations! You win the game! ${playerScore} to ${computerScore}`);
        }
    }

})


function getComputerChoice() {
    const choiceArray = ["rock", "paper", "scissors"];
    return choiceArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    
    const capitalizePlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    const capitalizeComputerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    if(
        (computerSelection === "rock" && playerSelection === "scissors") ||(computerSelection === "paper" && playerSelection === "rock") || (computerSelection === "scissors" && playerSelection === "paper")) {
            computerScore++
            return `You lose! ${capitalizeComputerSelection} beats ${capitalizePlayerSelection}`;
    } else if(
        (computerSelection === "rock" && playerSelection === "rock") || (computerSelection === "paper" && playerSelection === "paper") || (computerSelection === "scissors" && playerSelection === "scissors")) {
            return `It's a draw! You both chose ${capitalizePlayerSelection}.`
    } else {
        playerScore++
        return `You win! ${capitalizePlayerSelection} beats ${capitalizeComputerSelection}`
    }
}
