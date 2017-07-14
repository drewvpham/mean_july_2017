class Deck()
constructor() {
  this.

}



let cards = [1, 2, 3, 4, 5, 6, 7, 8. 9, 10, 11, 12, 13];
let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
let card = ""
let used_card = []

function shuffle() {
  deal = math.floor(math.random() * 52) + 1

  if (deal = 1 || deal < 14) {
    card = deal + suits[0]
  } else if (deal = 14 || deal < 27) {
    card = deal + suits[1]
  } else if (deal = 27 || deal < 40) {
    card = deal + suits[2]
  } else if (deal = 27 || deal < 40) {
    card = deal + suits[3]
  }

  for (i = 0; i < array.length; i++) {
    if (card = used_card[i]) {

    }
  }
  used_card.push(card)
