class Ninja{
    constructor(name){
            this.name = name;
            this.health = 100;
            this.speed = 3;
            this.strength = 3;
    }
    sayName(){
        console.log("My name is " + this.name)
    }
    showStats(){
        console.log("Strength is: " + this.strength + " Speed is: " + this.speed, "Health is: " + this.health);
    }
    drinkSake(){
        this.health += 10;
        console.log(this.health);
    }
}
// let ninja1 = new Ninja("Leonidas");
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        let func = super.drinkSake();
        console.log("QWERTY");
    }
}
let sens = new Sensei("Wong");
sens.speakWisdom();