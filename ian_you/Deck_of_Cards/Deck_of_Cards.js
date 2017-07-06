class Deck{
  constructor(){
    this.shape = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
    this.number = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    this.deck = [];
    for (let i = 0; i < this.shape.length; i++){
      for (let j = 0; j < this.number.length; j++){
        this.deck.push(this.number[j]+" of "+this.shape[i])
      }
    }
  }

  shuffle() {
    let m = this.deck.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }
    return this
  }
  reset() {
    this.deck = [];
    for (let i = 0; i < this.shape.length; i++){
      for (let j = 0; j < this.number.length; j++){
        this.deck.push(this.number[j]+" of "+this.shape[i])
      }
    }
  }

  deal(){
    var card = Math.floor(Math.random() * this.deck.length);
    var cardDealt = this.deck[card]
    this.deck.splice(card, 1);
    console.log(cardDealt);
    return cardDealt;
  }
}

class Player{
  constructor(name){
    this.name = name;
    this.hand = [];
  }
  takeCard(deck){
    let card = deck.deal();
    this.hand.push(card);
    return this
  }

  discard(number){
    let card = this.hand.splice(number-1, 1)
    return this
  }

}

deck1 = new Deck();
player1 = new Player();
deck1.shuffle();
player1.takeCard(deck1).takeCard(deck1).takeCard(deck1).takeCard(deck1)

// player1.discard(2).discard(1)

console.log(player1.hand)
