function Card(suit, value){
	this.suit = suit;
	this.value = value;
}
function Player(name){
	this.name = name;
	this.hand = {
		cards: [],
		value: 0
	};
}

function Deck(){
	this.cards = [];
	this.reset = function(){
		this.cards = [];
		var suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
		var values = [2,3,4,5,6,7,8,9,10,'Jack', 'King', 'Queen', 'Ace']
		for(let i = 0; i < suits.length; i++){
			for(let j = 0; j < values.length; j++){
				this.cards.push(new Card(suits[i], values[j]))
			}
		}
	}
	this.reset();
}

function Game(){
	this.players = [];
	this.deck = new Deck();
	this.startGame = function(player){
		var dealer = new Player('Dealer')
		this.players.push(player);
		this.players.push(dealer)
		this.deal([player, dealer], 2);
	}
	this.deal = function(players, num){
		console.log(typeof players)
		if(! Array.isArray(players)){
			players = [players];
		}
		//remove cards from deck and put into players' hands
		for(let i = 0; i < num; i++){
			console.log(players)
			for(let j = 0; j < players.length; j++){
				let player = players[j];
				console.log(players[0])
				player.hand.cards.push(this.deck.cards.pop())
			}
		}
		//calculate value of hand
		for(let i = 0; i < players.length; i++){
			let player = players[i];
			this.calculateValue(player);
		}
	}
	this.calculateValue = function(player){
		player.hand.value = 0;
		//create flag so we can evaluate/re evaulate any Aces we find
		var foundAce = false;
		var value = 0;
		for(let i = 0; i < player.hand.cards.length; i++){
			let card = player.hand.cards[i];
			if(card.value === 'Ace'){
				if(foundAce === false){
					foundAce = 1;
				} else {
					foundAce++;
				}
			}
			else if(typeof card.value === 'string'){
				value = 10;
			}
			else {
				value = card.value
			}
			player.hand.value += value;
		}
		//set the value of Ace(s)
		if(foundAce != false){
			while(foundAce--){
				if(player.hand.value + 11 <= 21){
					player.hand.value += 11;
				}
				else {
					player.hand.value += 1;
				}
			}
		}
	}
}
var game = new Game()
var cody = new Player('Cody')
