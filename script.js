function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function getPlayerChoice() {
    let userChoice = prompt('Choose rock, paper or scissors.').toLowerCase();
    console.log(userChoice);
    return userChoice;
}

function checkWinner(playerChoice, computerChoice) {
    if ((playerChoice == 'rock' && computerChoice == 'scissors') 
    || (playerChoice == 'paper' && computerChoice == 'rock') 
    || (playerChoice == 'scissors' && computerChoice == 'paper')) {
    return 'Player';
}   else if (playerChoice == computerChoice) {
    return 'Draw';
}   else {
    return 'Computer';
}
}

function playRound(playerChoice, computerChoice) {
    let result = checkWinner(playerChoice, computerChoice);
    if (result == 'Player') {
        return `You have won! ${playerChoice} beats ${computerChoice}.`
    }   else if (result == 'Computer') {
        return `You have lost! ${computerChoice} beats ${playerChoice}.`
    }   else {
        return 'It is a draw!'
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; (playerScore || computerScore) < 5; i++) {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(playerChoice, computerChoice));
    if (checkWinner(playerChoice, computerChoice) == 'Player') {
        playerScore++;
        console.log('Current Player score:', playerScore);
    }   else if (checkWinner(playerChoice, computerChoice) == 'Computer') {
        computerScore++;
        console.log('Current Computer score:',computerScore);
    
    };
}
    if (playerScore > computerScore) {
        console.log('Player is the winner this time!');
    }   else if (playerScore < computerScore) {
        console.log('Computer is the winner this time!');
    }   else {
        console.log('It is a draw this time!');
    }
}

playGame();
