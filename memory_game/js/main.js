const cards = ["queen", "queen", "king", "king"]

const cardsInPlay = []
cardsInPlay.push(cards[0]);
cardsInPlay.push(cards[2]);

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[2]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry. Try again.");
	}
}

function flipCard (cardID) {
console.log("User Flipped " + cards[0]);
console.log("User Flipped " + cards[2]);
checkForMatch();
}

flipCard(0);
flipCard(2);