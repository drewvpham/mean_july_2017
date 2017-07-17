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
class Human {
	constructor(name){
		this._name = name;
		this._level = 1;
		this._strength = 5;
		this._intelligence = 5;
		this._constitution = 5;
		this._dexterity = 5;
		this._health = 5;
		this.test()
		calculateHealth(this);
	}
	attack(warrior){
		let damage = this.strength * 3;
		warrior.health -= damage;
	}
	get name(){
		return this._name;
	}
	set name(name){
		this._name = name
	}
	//private function
	static test(){
		console.log('test');
	}
}

function calculateHealth(human){
	human.health = human.constitution * 20;
}

let bob = new Human('Bob');
Human.test()
// let jeff = new Warrior('Jeff');

// bob.attack(jeff);

console.log(bob.name = 'Cody');
console.log(bob.name);
