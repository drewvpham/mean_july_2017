function Ninja(name){

    var self = this;
    var speed = 3;
    var strength = 3;
    this.name = name;
    health = 100;

    this.sayName = function(){
        console.log("My name is " + self.name + ".");
    }

    this.showStats = function(){
        console.log("My name is " + self.name + "." + " My health is " + health + " and strength is " + strength + ".");
    }

    this.drinkSake = function(){
     health = health + 10
       console.log("Health is now " + health + ".");
    }
}
var donatello = new Ninja("Donatello");
donatello.sayName();
donatello.showStats();
donatello.drinkSake();
