console.log("JS file is connected to HTML! Woo!")

var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/* check to see if any cards match*/
if (cardOne === cardTwo || cardThree === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
};