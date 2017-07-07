function Ninja(name) {
    this.name = name;
    this.health = 100;
    let speed = 3;
    let strength = 3;
    
    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
    }

    this.kick = function(ninja){
        console.log(`${ninja.name} was kicked by ${this.name} and lost 15 Health!`);
    }
}

Ninja.prototype.sayName = function(){
    console.log(`My ninja name is ${this.name}!`);
}
Ninja.prototype.drinkSake = function(){
    this.health += 10;
}
Ninja.prototype.punch = function(ninja){
    ninja.health -= 5;
    console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`)
}

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");

red_ninja.punch(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blue_ninja.kick(red_ninja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"