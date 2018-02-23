
var cards = [
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
  },
];
var cardsInPlay = [];

// Check for matching cards
function checkForMatch(){
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]){
      alert("You found a match!");
    }
    else {
      alert("Sorry, try again.");
    }
  }
}

// Display rank of flipped card
function flipCard(cardId){
  console.log("User has flipped " + cards[cardId].rank);
  console.log("Suit of flipped card is " + cards[cardId].suit);
  console.log("Image of flipped card is " + cards[cardId].cardImage);

  cardsInPlay.push(cards[cardId].rank);

  checkForMatch();
}

flipCard(0);
flipCard(2);
