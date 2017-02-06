console.log("JS file is connected to HTML! Woo!");

/*card variables*/
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*game logic for finding card match*/
if (cardOne === cardTwo || cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}

/*creating game board for cards*/
var playmat = document.getElementById('game-board');

/*creating cards*/
var createCards = function() {
	for(var i = 0; i < 4; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
		playmat.appendChild(newCard);
	}
}

window.addEventListener('load', createCards);
