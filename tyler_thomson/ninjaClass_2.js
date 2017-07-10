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
        console.log("Strength is: " + strength, "Speed is: " + speed, "Health is: " + self.health);
    }
    this.drinkSake = function(){
        self.health += 10;
        console.log(self.health);
    }
    this.punch = function(ninja){
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(this.name + " punched " + ninja.name + ", robbing him of 5 health");
        }  
    }
    this.kick = function(ninja){
        if (ninja instanceof Ninja){
            console.log(ninja.health);
            let damage = strength * 5;
            console.log(this.name + " kicked the shit out of " + ninja.name + ", destroying " + damage + " health");
        }
    }
    return speed, strength;
}

var ninja1 = new Ninja("Leonidas");
var ninja2 = new Ninja("Spartacus");

ninja2.punch(ninja1);
ninja1.kick(ninja2);
