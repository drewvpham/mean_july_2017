function Ninja(name){
  this.class = 'Ninja'
  this.name = name;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;

  drinkSake(this);
  // showStats(this);

  this.myFunc = function(){
    console.log(this)
  }

  function drinkSake(self){
    self.Sake = self.health + 10;
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
