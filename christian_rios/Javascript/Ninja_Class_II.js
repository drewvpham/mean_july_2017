function Ninja(name){

    var self = this;
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;

    this.sayName = function(){
        console.log("My name is " + self.name + ".");
    }

    this.showStats = function(){
        console.log("My name is " + self.name + "." + " My health is " + this.health + " and strength is " + strength + ".");
    }

    this.drinkSake = function(){
     this.health = this.health + 10
       console.log("Health is now " + this.health + ".");
    }

    this.kick = function (kicked_ninja){
      if (kicked_ninja instanceof Ninja)
      kicked_ninja.health = kicked_ninja.health - 5 * strength
      lost_health = strength * 5
      console.log(kicked_ninja.name + " got punched by " + this.name + " and lost " + lost_health + " health.")
      console.log(kicked_ninja.name + "'s health is now " + kicked_ninja.health + ".")
    }
}

Ninja.prototype.punch = function(punched_ninja){
  if (punched_ninja instanceof Ninja)
  punched_ninja.health -= 5;
  console.log(punched_ninja.name + " got punched by " + this.name + " and lost 5 health.")
}

var donatello = new Ninja("Donatello");
donatello.showStats()
var raphael = new Ninja("Raphael");
raphael.punch(donatello);
donatello.kick(raphael);
