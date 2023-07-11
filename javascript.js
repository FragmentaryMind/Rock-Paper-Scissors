// git@github.com:FragmentaryMind/Rock-Paper-Scissors.git

function notifyPlayer (message) {
    console.log(message);
    alert(message);
}

function getPlayerChoice () {
    let choice = null;

    while (!choice) {
        choice = prompt("Would you like Rock, Paper, or Scissors?") ?? "";

        switch (choice.toUpperCase()) {
            case "ROCK":
            case "PAPER":
            case "SCISSORS":
                return choice;
            default:
                choice = null;
        }

        alert("Invalid choice.");
    }

    return "Wet Fart";
}

function getComputerChoice () {
    return ["Rock","Paper","Scissors"][Math.floor(Math.random() * 3)];
}

function playRound (playerSelection, computerSelection) {
    const ps = playerSelection.toUpperCase();
    const cs = computerSelection.toUpperCase();

    if (ps == cs) {
        notifyPlayer(`It's a tie! You and the computer both chose ${playerSelection}.`);
        return;
    }
    
    let playerWins = (ps == "ROCK" && cs != "PAPER") || (ps == "PAPER" && cs != "SCISSORS") || (ps == "SCISSORS" && cs != "ROCK");
    if (playerWins) {
        playerWinCount += 1;
        notifyPlayer(`You won! Your ${playerSelection} beats the computer's ${computerSelection}.`);
    } else {
        computerWinCount += 1;
        notifyPlayer(`The computer won! The computer's ${computerSelection} beats your ${playerSelection}.`);
    }
}

function game() {
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
    playRound(getPlayerChoice(), getComputerChoice());
}

let playerWinCount = 0;
let computerWinCount = 0;
game();
let outcomeNotification = playerWinCount > computerWinCount ? "You won!" : playerWinCount < computerWinCount ? "You lost!" : "It's a tie!";
notifyPlayer(`${outcomeNotification} Player Victories: ${playerWinCount} Computer Victories: ${computerWinCount}.`);