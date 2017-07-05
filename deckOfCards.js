class Deck {
    constructor(){
        this.reset();
    }
    reset(){
        this.cards = [];
        var suits = ['Clubs', 'Diamonds', 'Spades','Hearts'];
        var values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        for (let i = 1; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                let card = values[j] + " of " + suits[i];
                this.cards.push(card);          
            }
        }
    }

    shuffle() {
        let array = this.cards;
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    deal(){
        let i, j;
        i = Math.floor(Math.random() * this.cards.length);
        j =  this.cards.splice(i,1);
        return j[0];
    };
};

class Player{

    constructor(name){
        this.name = name;
        this.hand = [];
    };

    take(card){
        this.hand.push(card);
    }

    discard(card){
        this.hand.splice(card, 1);
        return card;
    }
}


newDeck1 = new Deck();
// newDeck1.shuffle();
// console.log(newDeck1.deal());
// console.log(newDeck1.cards);

player1 = new Player("Jack");

player1.take(newDeck1.deal());
// player1.take(newDeck1.deal());
console.log(player1.hand);