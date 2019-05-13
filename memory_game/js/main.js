const cards = ["queen", "queen", "king", "king"]

var cardOne = cards[0];
var cardTwo = cards [1];

const cardsInPlay = []
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped" + " " + cardOne);
console.log("User flipped" + " " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You found a match!")
	} else {
		alert("Sorry. Try again.")
	}
}