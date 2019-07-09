const DEFAULT_LIMIT = 8;
const DEFAULT_WIN = 100;
const START_PRIZE = 0;
let minNumber = 0; // game min limit
let maxNumber = DEFAULT_LIMIT; // game max limit
let addedNum = 4; // added limit
let multiplier = 2; 
let attempts = 3; // number of game attempts
let round = 1; // current round
let maxWin = DEFAULT_WIN; // max prize
let totalPrize = START_PRIZE; // total win prize
let win; // win or loose state
let divider; // win prizes divider
let user = confirm('Do you want to play a game?', '');

if (!user) {
	alert('You did not become a billionaire, but can.');
} else {
	while (user) {
		let continueToGame = true;
		while (continueToGame) {
			let luckyNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
			let isGuessedNumber = false;

			for (round = 1; round < attempts + 1; round++) {
				divider = Math.pow(multiplier, round - 1);
				const attemptsLeft = attempts - round + 1;
				let numberPocket = parseInt(prompt(`Choose a roulette pocket number from 0 to ${maxNumber}.
					Attempts left: ${attemptsLeft}
					Total prize: ${totalPrize}$
					Possible prize on current attempt: ${maxWin / divider}$`));

				if (numberPocket < 0 || numberPocket > maxNumber) {
					alert('Chosen a roulette pocket number  incorrect')
				} else if (luckyNumber === numberPocket) {
					totalPrize += maxWin / divider;
					break;
				} else {
					if (round === attempts) {
						isGuessedNumber = true;
						break;
					}
				}
			}
			if (isGuessedNumber) {
				break;
			}
			continueToGame = confirm(
				'Congratulation, you won!Your prize is: '+ totalPrize +'$. Do you want to continue?’.'
				);
			if (continueToGame) {
				maxNumber += addedNum;
				maxWin *= multiplier;
			} else {
				break;
			}
		}
		alert('Thank you for your participation. Your prize is: '+ totalPrize +'$');
		maxNumber = DEFAULT_LIMIT;
		totalPrize = START_PRIZE;
		maxWin = DEFAULT_WIN;
		user = confirm('Do you want to play again?');
	}
}