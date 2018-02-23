
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
function flipCard(){
  var cardId = this.getAttribute("data-id");
  this.setAttribute('src', cards[cardId].cardImage);
  console.log("User has flipped " + cards[cardId].rank);
  console.log("Suit of flipped card is " + cards[cardId].suit);
  console.log("Image of flipped card is " + cards[cardId].cardImage);

  cardsInPlay.push(cards[cardId].rank);

  checkForMatch();
}

function createBoard(){
  console.log("Entered function");
  for (var i = 0; i < cards.length; i++) {
    console.log("Entered for loop");
    var cardElement = document.createElement('img');
    console.log("Created img element");
    cardElement.setAttribute('src', 'images/back.png');
    console.log("Set card img src attribute");
    cardElement.setAttribute('data-id', i);
    console.log("Set card img id attribute");
    cardElement.addEventListener('click', flipCard);
    console.log("Added event listener to card");
    document.getElementById('game-board').appendChild(cardElement);
    console.log("Card added to the board");
  }
}

createBoard();
