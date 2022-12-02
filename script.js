const choices = ['rock', 'paper', 'scissors'];
const winners = [];

function game() {
	for (let i = 1; i <= 5; i++) {
		playRound(i);
	}
	logWins();
}

function playRound(round) {
	const playerSelection = playerChoice();
	const computerSelection = computerChoice();
	const winner = checkWinner(playerSelection, computerSelection);
	winners.push(winner);
	logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
	let input = prompt('Saisho wa guu Janken Pon! type Rock, Paper, or Scissors!');
	while (input == null) {
		input = prompt('Saisho wa guu Janken Pon! type Rock, Paper, or Scissors!');
	}
	input = input.toLowerCase();
	let check = validateInput(input);
	while (check == false) {
		input = prompt('Saisho wa guu Janken Pon! type Rock, Paper, or Scissors!');
		while (input == null) {
			input = prompt('Saisho wa guu Janken Pon! type Rock, Paper, or Scissors!');
		}
		input = input.toLowerCase();
		check = validateInput(input);
	}

	return input;
}

function computerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
	return choices.includes(choice);
}

function checkWinner(choiceP, choiceC) {
	if (choiceP === choiceC) {
		return 'Aiko desho! Tie!';
	} else if ((choiceP === 'rock' && choiceC == 'scissors') || (choiceP === 'paper' && choiceC == 'rock') || (choiceP === 'scissors' && choiceC == 'paper')) {
		return 'You WIN';
	} else {
		return 'Computer WINS';
	}
}

function logWins() {
	let playerWins = winners.filter((item) => item == 'You WIN').length;
	let computerWins = winners.filter((item) => item == 'Computer WINS').length;
	let ties = winners.filter((item) => item == 'Aiko desho! Tie!').length;
	console.log('Results:');
	console.log('Player Wins:', playerWins);
	console.log('Computer Wins:', computerWins);
	console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
	console.log('Round', round);
	console.log('Player chose', playerChoice);
	console.log('Computer chose', computerChoice);
	console.log(winner, 'Wins the Round');
	console.log('----------------------');
}
