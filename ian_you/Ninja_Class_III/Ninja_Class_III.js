class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    let message = "My Ninja name is "+ this.name;
    console.log(message);
    return message;
  }
  showStats(){
    let message = "Name: "+ this.name+", Health: "+this.health+", Speed: "+ this.speed + ", Strength: " + this.strength;
    console.log(message);
    return message;
  }
  drinkSake(){
    this.health += 10;
    return this;
  }
}

class Sensai extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake()
    console.log("This is a wisdom");
  }
}

ninja1 = new Ninja("NoNamed Ninja");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

sensai1 = new Sensai("Named Sensai")
sensai1.speakWisdom();
sensai1.showStats();
