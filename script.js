function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'scissors') 
    || (playerSelection == 'paper' && computerSelection == 'rock') 
    || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        return `You have won! ${playerSelection} beats ${computerSelection}.`
    }   else if (playerSelection == computerSelection) {
        return 'It\'s a draw!'
    }   else {
        return `You have lost! ${computerSelection} beats ${playerSelection}.`
    }
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));
