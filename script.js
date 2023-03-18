function getComputerChoice() {
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock' && computerSelection == 'Scissors') 
    || (playerSelection == 'paper' && computerSelection == 'Rock') 
    || (playerSelection == 'scissors' && computerSelection == 'Paper')) {
        return `You have won! ${playerSelection} beats ${computerSelection}.`
    }   else if ((playerSelection == 'rock' && computerSelection == 'Paper') 
    || (playerSelection == 'paper' && computerSelection == 'Scissors') 
    || (playerSelection == 'scissors' && computerSelection == 'Rock')) {
        return `You have lost! ${computerSelection} beats ${playerSelection}.`
    }   else {
        return `It is a draw!`
    }
   
    
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

//let playerChoice = prompt('Choose Rock, Paper or Scissors');
//let playerSelection = playerChoice.toLowerCase();