function Ninja(name){
  this.name = name;
  this.health = 100;
  var speed = 3;
  var strength = 3;

  this.sayName = function(){
    console.log("My ninja name is " + this.name);
  }
  this.showStats = function(){
    console.log("Name: "+ this.name+", Health: "+this.health+", Speed: "+ speed + ", Strength: " + strength);
  }
  this.drinkSake = function(){
    this.health += 10;
    return this;
  }
  this.punch = function (ninja) {
    if (ninja instanceof Ninja == false){
      console.log("Not a ninja, unable to punch");
    }
    else{
      ninja.health-=5;
      console.log(ninja.name + " was punched by "+this.name+" and lost 5 health!");
      return this;
    }
  }
  this.kick = function (ninja) {
    if (ninja instanceof Ninja == false){
      console.log("Not a ninja, unable to kick");
    }
    else{
      ninja.health -= 3*this.strength;
      console.log(ninja.name + " was kicked by "+this.name+" and lost "+3*this.strength+" health!");
      return this;
    }
  }
}

function Samurai(name){
  this.name = name;
}

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
var yellow_samurai = new Samurai("Yellow");


red_ninja.punch(blue_ninja);
blue_ninja.kick(red_ninja);
red_ninja.punch(yellow_samurai);
blue_ninja.kick(yellow_samurai);
