function getComputerChoice() {
const choice = ['Rock', 'Paper', 'Scissors'];
const computerChoice = choice[Math.floor(Math.random() * choice.length)];
console.log(computerChoice);
}

getComputerChoice();