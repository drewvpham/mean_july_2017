function Ninja(name){
  this.class = 'Ninja'
  this.name = name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;

  drinkSake(this);
  punch(this);
  kick(this);
  // showStats(this);

  this.myFunc = function(){
    console.log(this)
  }

  function drinkSake(self){
    self.Sake = self.health + 10;
  }
  function punch(self){
    self.punch = self.health - 5;
  }
  function kick(self){
    self.kick = (self.strength - 15) + self.punch;

  }
  // function showStats(self){
  //   self.Stats = self.strength; self.speed; self.health;
  // }
}
let ninja1 = new Ninja('Paul');
  console.log(ninja1.name);
  // console.log(ninja1.Stats);
  console.log(ninja1.myFunc());
  console.log(ninja1.Sake);
  console.log(ninja1.punch);
  console.log(ninja1.kick);
