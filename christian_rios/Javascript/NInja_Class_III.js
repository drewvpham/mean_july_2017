class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
      console.log("My name is " + this.name + ".");
    }

    showStats(){
      console.log(this.name + " Stats: " + "Strength: " + this.strength + ", " + "Speed: "+ this.speed + ", " + "Health: " + this.health + ".")
    }

    drinkSake(){
      this.health += 10
      console.log(this.name + " drank Sake and gained 10 health, totaling " + this.health + ".")
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200
        this.speed = 10
        this.strength = 10
    }
        speakWisdom(){
          let message = super.drinkSake();
          console.log(message);
        }
}

let ninja1 = new Sensei("Yu");
ninja1.speakWisdom();
