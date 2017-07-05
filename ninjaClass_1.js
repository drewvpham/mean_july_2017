function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("My name is " + self.name)
    }
    this.showStats = function(){
        console.log("Strength is: " + strength, "Speed is: " + speed, "Health is: " + this.health);
    }
    this.drinkSake = function(){
        self.health += 10;
        console.log(self.health);
    }
    return speed, strength;
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();