class Game {
	constructor(players){
		
	}
}

class Player {
	constructor(name){
		this.name = name;
		this.hand = {
			cards: [],
			value: 0
		}
	}

	calculateValue(){
		let player = this;
		player.hand.value = 0;
		//create flag so we can evaluate/re evaulate any Aces we find
		let foundAce = false;
		for(let card of player.hand.cards){
			let value = 0;
			console.log(`evaluting ${card.value} of ${card.suit}...`)
			if(card.value === 'Ace'){
				if(foundAce === false){
					foundAce = 1;
				} else {
					foundAce++;
				}
			}
			else if(typeof card.value === 'string' && card.value != 'Ace'){
				console.log(`using ${card.value} as 10`);
				value = 10;
			}
			else {
				value = card.value
			}
			player.hand.value += value;
			console.log(`changing player hand value to ${player.hand.value}`)
		}
		//set the value of Ace(s)
		if(foundAce != false){
			while(foundAce--){
				if(player.hand.value + 11 <= 21){
					player.hand.value += 11;
					console.log(`using Ace as 11. player hand changed to ${player.hand.value}`)
				}
				else {
					player.hand.value += 1;
					console.log(`using Ace as 1. player hand changed to ${player.hand.value}`)
				}
			}
		}
	}
}

class Card {
	constructor(suit, value){
		this.suit = suit;
		this.value = value;
	}
}

class Deck {
	constructor(){
		this.cards = [];
		this.reset();
		this.shuffle();
	}

	deal(players, num){
		if(players.constructor != Array){
			players = [players];
		}
		while(num--){
			for(let player of players){
				player.hand.cards.push(this.cards.pop())
			}
		}
		for(let player of players){
			player.calculateValue();
		}
	}

	reset(){
		let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
		let values = [2,3,4,5,6,7,8,9,10,'Jack','Queen','King','Ace']
		for(let suit of suits){
			for(let value of values){
				this.cards.push(new Card(suit, value))
			}
		}
		/* more complicated way of assigning values */
		// for(let suit of suits){
		// 	for(let i = 2; i < 15; i++){
		// 		let value;
		// 		switch(i){
		// 			case 11:
		// 				value = 'Jack'
		// 				break;
		// 			case 12:
		// 				value = 'Queen'
		// 				break;
		// 			case 13:
		// 				value = 'King'
		// 				break;
		// 			case 14:
		// 				value = 'Ace'
		// 				break;
		// 			default:
		// 				value = i
		// 		}
		// 		this.cards.push(new Card(suit, value))
		// 	}
		// }
	}

	display(){
		for(let card of this.cards){
			console.log(`${card.value} of ${card.suit}`)
		}
	}

	shuffle(){
		for(let i = 0; i < this.cards.length; i++){
			let random_index = Math.floor(Math.random() * this.cards.length);
			let temp = this.cards[i];
			this.cards[i] = this.cards[random_index];
			this.cards[random_index] = temp;
		}
	}
}

let deck = new Deck();
let cody = new Player('Cody');


deck.deal(cody, 2);

console.log(cody.hand);






