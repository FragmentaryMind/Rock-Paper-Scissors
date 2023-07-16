// git@github.com:FragmentaryMind/Rock-Paper-Scissors.git

let playerWinCount = 0;
let computerWinCount = 0;
let gameOver = false;
const rpsContainer = document.querySelector(".rps-container");

function notifyPlayer (message) {
    const outcomePara = document.querySelector(".outcome");
    outcomePara.textContent = message;
    const scorePara = document.querySelector(".score");
    scorePara.textContent = `Player Victories: ${playerWinCount} Computer Victories: ${computerWinCount}.`;
}

function playRound (playerSelection, computerSelection) {
    const ps = playerSelection;
    const cs = computerSelection;

    if (ps == cs) {
        notifyPlayer(`It's a tie! You and the computer both chose ${playerSelection}.`);
        return;
    }
    
    let playerWins = (ps == "rock" && cs != "paper") || (ps == "paper" && cs != "scissors") || (ps == "scissors" && cs != "rock");
    if (playerWins) {
        playerWinCount += 1;
        notifyPlayer(`Yes! Your ${playerSelection} beats the computer's ${computerSelection}.`);
    } else {
        computerWinCount += 1;
        notifyPlayer(`No! The computer's ${computerSelection} beats your ${playerSelection}.`);
    }

    if (playerWinCount + computerWinCount >= 5) gameOver = true;
}

function rpsPlayerClick (event) {
    if (gameOver) return;

    let playerChoice = event.target.getAttribute("class").replace("rps-img ","");
    if (playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") return;
    let computerChoice = ["rock","paper","scissors"][Math.floor(Math.random() * 3)];
    playRound(playerChoice, computerChoice);

    if (gameOver) {
        const h1 = document.querySelector("h1");
        h1.textContent = "GAME OVER";
        const finalOutcome = document.querySelector(".final-outcome");
        finalOutcome.textContent = playerWinCount > computerWinCount ? "You won!" : 
                                   playerWinCount < computerWinCount ? "You lost!" : 
                                   "It's a tie!";
        if (computerWinCount >= playerWinCount + 3) {
            finalOutcome.textContent = "*** YOU GOT DESTROYED ***";
            finalOutcome.setAttribute("class","awesome");
        }
    }
}

rpsContainer.addEventListener('click', rpsPlayerClick);