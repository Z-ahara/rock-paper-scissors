// math.floor rounds a number down to nearest integer, math.random returns a floating-point random number >= 0 and less than 1
// randomizes between rock, paper, and scissors based on randomized numbers
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock"
    } else if (randomNumber == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// goes thru each rock, paper, scissors scenarios (find way to shorten)
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" & computerSelection == "paper") {
        return "You lose! Paper Beats Rock"
    } else if (playerSelection.toLowerCase() == "rock" & computerSelection == "rock") {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "rock" & computerSelection == "scissors") {
        return "Computer loses! Rock beats scissors"
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "rock") {
        return "Computer loses! Paper beats rock"
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "paper") {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "scissors") {
        return "You lose! Scissors beats paper"
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "rock") {
        return "You lose! Rock beats scissors"
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "scissors") {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "paper") {
        return "Computer loses! Scissors beats paper"
    }
}

const playerSelection = prompt("Rock, paper, or scissors?")
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))