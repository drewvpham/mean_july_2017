function Ninja(name) {
        this.class = 'Ninja';
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;

        this.sayName = function(){
            return this.name;
        }

        this.showStats = function(){
            stats = 'Health: ' + String(this.health) + ' Strength: ' + String(strength) + ' Speed: ' + String(speed);
            return stats;
        }

        this.drinkSake = function(){
            this.health += 10;
            return this.health;
        }
        this.punch = function(ninja){
            if(ninja.constructor === this.constructor){
                let damage = strength * 3 + speed;
                ninja.health -= damage;
                return `You punched the ${ninja.class} for ${damage} damage.`;
            }
            return `One does not simply "punch" a ninja...`;
        }

        this.kick = function(ninja){
            if(ninja.constructor === this.constructor){
                let damage = strength * 3 + speed;
                ninja.health -= damage;
                return `You kicked the ${ninja.class} for ${damage} damage.`;
            }
            return `Only ninjas stand a chance against one another...`
            
        }


};

function Warrior(name){
    this.class = "Warrior";
    this.name = "Name";
}



var blue_ninja = new Ninja("Hayabusa");
var red_ninja = new Ninja("Kawasaki");
var warrior1 = new Warrior("Bill")

console.log(blue_ninja.punch(red_ninja));

console.log(red_ninja.health);







// ninja.drinkSake();
// ninja.drinkSake();

// console.log(ninja.sayName());
// console.log(ninja.showStats());

