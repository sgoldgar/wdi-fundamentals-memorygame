console.log("JS file is connected to HTML! Woo!");

/*card array*/
var cards = ['queen', 'queen','king','king'];

/*stores cards in play*/
var cardsInPlay = [];

/*game logic for finding card match*/
var isMatch = function(cardArray){
	if (cardArray[0] === cardArray[1]) {
		alert('You found a match!');
	} else {
		alert('Sorry, try again.');
	}
}

/*checks to see if there are cards in play*/
var isTwoCards = function (){
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'queen') {
		this.innerHTML = '<img src="queen.png" alt="Queen of Spades"/>';
	} else if (this.getAttribute('data-card') === 'king'){
		this.innerHTML = '<img src="king.png" alt="King of Spades"/>';
	}
	if (cardsInPlay.length === 2) { //if two cards are in play, check for match, then reset array
		isMatch(cardsInPlay);
		cardsInPlay = [];
		for(var j=0; j < document.getElementsByClassName('card').length; j++) {
			var clearCard = document.getElementsByClassName('card')[j];
			clearCard.innerHTML = '';
		}
	}
}

/*creating game board for cards*/
var playmat = document.getElementById('game-board');

/*creating cards*/
var createCards = function() {
	for(var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = "card";
		newCard.setAttribute('data-card', cards[i]);
		newCard.addEventListener('click', isTwoCards);
		playmat.appendChild(newCard);
	}
}

window.addEventListener('load', createCards);
