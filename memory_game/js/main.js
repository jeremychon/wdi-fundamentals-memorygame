const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = []
cardsInPlay.push(cards[0].rank);
cardsInPlay.push(cards[2].rank);

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry. Try again.");
		alert("Sorry. Try again.");
	}
}

function flipCard (cardID) {
console.log("User Flipped " + cards[0].rank);
console.log(cards[0].cardImage);
console.log(cards[0].suit);
console.log("User Flipped " + cards[2].rank);
console.log(cards[2].cardImage);
console.log(cards[2].suit);
checkForMatch();
}

flipCard(0);
flipCard(2);