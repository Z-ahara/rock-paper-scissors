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

let playerScore = 0
let computerScore = 0

function computerWin() {
    computerScore=+1
}

function playerWin() {
    playerScore=+1
}

// goes thru each rock, paper, scissors scenarios (find way to shorten)
function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock" & computerSelection == "paper") {
        computerWin()
        return "You lose! Paper Beats Rock"
    } else if (playerSelection.toLowerCase() == "rock" & computerSelection == "rock") {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "rock" & computerSelection == "scissors") {
        playerWin()
        return "Computer loses! Rock beats scissors"
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "rock") {
        playerWin()
        return "Computer loses! Paper beats rock"
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "paper") {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "paper" & computerSelection == "scissors") {
        computerWin()
        return "You lose! Scissors beats paper"
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "rock") {
        computerWin()
        return "You lose! Rock beats scissors"
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "scissors") {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "scissors" & computerSelection == "paper") {
        playerWin()
        return "Computer loses! Scissors beats paper"
    }
}

// plays a five-round game
// function game() {
//     if (computerScore == 5) {
//         console.log("Computer wins!")
//     } else if (playerScore == 5) {
//         console.log("Player wins!")
//     }

//     playRound(playerSelection, computerSelection)
//     playRound(playerSelection, computerSelection)
//     playRound(playerSelection, computerSelection)
//     playRound(playerSelection, computerSelection)
//     playRound(playerSelection, computerSelection)

// }

const playerSelection = ("Rock, paper, or scissors?")
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))