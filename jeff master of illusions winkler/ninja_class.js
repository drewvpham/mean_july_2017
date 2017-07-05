class Ninja  {
  constructor(name){
      this.name = name;
      this.health = 100;
      this.speed = 3;
      this.strength = 3;
  }


    sayName(){
      console.log(this.name);
    }
    showStats(){
      console.log(this.name, this.health, this.speed, this.strength);
    }

   drinkSake(){
    console.log(this.health +10); 
  }
}

let ninja1 = new Ninja("Hyabusa");
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
