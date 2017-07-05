function Warrior(name){
	//what is 'this'?  console.log it!
	console.log('in the constructor: ', this)

	//all class attributes must be attached to 'this'
	this.class = 'Warrior';
	this.name = name;
	this.level = 1;
	this.strength = 7;
	this.intelligence = 4;
	this.constitution = 8;
	this.dexterity = 5;

	//invocation of private function
	calculateHealth(this);


	//private function definition
	function calculateHealth(self){
		self.health = self.constitution * 20;
	}
	//end of private function

	//public functions can be attached to 'this'
	//however, when possible they should be created through 'prototype'
	// public function definition
	this.myFunc = function(){
		console.log('HEY!!!')
	}
}


//use prototype whenever possible for creating public functions
//prototype prevents the function from being copied in memory more than once
Warrior.prototype.myFunc = function(){
	//this is still in scope, it represents the instance of our class
	console.log(this)

	console.log('HEY!!!')
}

//this function takes in another instance of the warrior class so they can interact
Warrior.prototype.attack = function(warrior){
	let damage = this.strength * 3;
	warrior.health -= damage;
	console.log(`You attack the ${warrior.class} for ${damage} damage.`)
}

// let jim = new Warrior('Jim');
// let jeff = new Warrior('Jeff');


//creating classes with the new ES6 syntax
class Warrior {
	constructor(name){
		this.class = 'Warrior';
		this.name = name;
		this.level = 1;
		this.strength = 7;
		this.intelligence = 4;
		this.constitution = 8;
		this.dexterity = 5;
		this.health = 160;
	}
	attack(warrior){
		let damage = this.strength * 3;
		warrior.health -= damage;
	}
}

let bob = new Warrior('Bob');
let jeff = new Warrior('Jeff');

bob.attack(jeff);

console.log(jeff.health);









