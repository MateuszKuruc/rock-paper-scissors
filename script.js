// gets random computer choice
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

// checks who won each round
function checkWinner(playerChoice, computerChoice) {
    let roundResult;
    if ((playerChoice == 'rock' && computerChoice == 'scissors') 
    || (playerChoice == 'paper' && computerChoice == 'rock') 
    || (playerChoice == 'scissors' && computerChoice == 'paper')) {
    roundResult = 'Player'
}   else if (playerChoice == computerChoice) {
    roundResult = 'Draw'
}   else if ((playerChoice == 'scissors' && computerChoice == 'rock') 
    || (playerChoice == 'rock' && computerChoice == 'paper') 
    || (playerChoice == 'paper' && computerChoice == 'scissors')) {
        roundResult = 'Computer'
}
return roundResult;
}

// shows details of every single round
function playRound(playerChoice, computerChoice) {
    let result = checkWinner(playerChoice, computerChoice);
    if (result == 'Player') {
        return `You have won! ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)} beats ${computerChoice}.`
    }   else if (result == 'Computer') {
        return `You have lost! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${playerChoice}.`
    }   else if (result == 'Draw') {
        return 'It is a draw!'
    }
}
// start the game when user chooses rock, paper or scissors
function fullGame() {
    computerChoice = getComputerChoice();
    updateScore(playerChoice, computerChoice);
    document.getElementById('playerChoiceDisplay').innerHTML = 'You chose: ' + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    document.getElementById('computerChoiceDisplay').innerHTML = 'Computer chose: ' + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
    document.getElementById('writeResult').innerHTML = playRound(playerChoice, computerChoice);
    declareWinner();
}

// update scoreboard
function updateScore(playerChoice, computerChoice) {
    let result = checkWinner(playerChoice, computerChoice);
    if (result == 'Player') {
        playerResult += 1;
        document.getElementById('playerScoreDisplay').innerHTML = `Your Score: ${playerResult}`
    }   else if (result == 'Computer') {
        computerResult += 1;
        document.getElementById('computerScoreDisplay').innerHTML = `Computer Score: ${computerResult}`
    }  else if (result == 'Draw') {
    drawResult += 1;
    document.getElementById('drawScoreDisplay').innerHTML = `Draws: ${drawResult}`
}
}

// declare winner after 5 wins
function declareWinner() {
    
    if (playerResult == 5) {
        winner = 'Player';
        document.getElementById('declareWinner').innerHTML = `${winner} is the winner of the game!`
        document.getElementById('reset').style.display = 'block';
    }   else if (computerResult == 5) {
        winner = 'Computer';
        document.getElementById('declareWinner').innerHTML = `${winner} is the winner of the game!`
        const reset = document.getElementById('reset');
        document.getElementById('reset').style.display = 'block';
    }
}

// reset the game 
function resetGame() {
    playerResult = 0;
    computerResult = 0;
    drawResult = 0;
    document.getElementById('playerScoreDisplay').innerHTML = `Your Score: ${playerResult}`
    document.getElementById('computerScoreDisplay').innerHTML = `Computer Score: ${computerResult}`
    document.getElementById('drawScoreDisplay').innerHTML = `Draws: ${drawResult}`
    document.getElementById('declareWinner').innerHTML = ``
    document.getElementById('playerChoiceDisplay').innerHTML = ''
    document.getElementById('computerChoiceDisplay').innerHTML = ''
    document.getElementById('writeResult').innerHTML = ''
    document.getElementById('reset').style.display = 'none';
}

let buttons = document.querySelectorAll('.btn');

buttons.forEach((button) =>
button.addEventListener('click', () => {
    if (button.id) {
        playerChoice = button.id;
        fullGame();
    }
}))

const reset = document.getElementById('reset');
reset.addEventListener('click', resetGame);

let computerChoice = getComputerChoice();
let playerChoice
let playerResult = 0;
let computerResult = 0;
let drawResult = 0;
let roundResult = checkWinner(playerChoice, computerChoice)
