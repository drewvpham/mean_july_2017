// // parent Dot class
// class Dot {
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     showLocation(){
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
//     // simple method in the parent class
//     parentFunction(){
//         return "This is coming from the parent!";
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius){
//         super(x, y);
//         this.radius = radius
//     }
//     showLocation(){
//         console.log(`This Circle is at x ${this.x} and y ${this.y}`);
//     }
//     // simple function in the child class
//     childFunction(){
//         // by using super, we can call the parent method
//         let message = super.parentFunction();
//         console.log(message);
//     }
// }
// let cerk = new Circle(1, 2, 3);
// cerk.childFunction();



//*************************************************************//

// parent Dot class
// class Dot {
//    constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     showLocation(){
//         console.log(`This Dot is at x ${this.x} and y ${this.y}`);
//     }
// }
// // child Circle class
// class Circle extends Dot {
//     constructor(x, y, radius){
//         super(x, y);
//         this.radius = radius
//     }
// }
// // we can now create Circles
// let circle1 = new Circle(33, 33, 33);
// // same attributes as a Dot, plus a radius
// console.log(circle1);
// // and Circles can access Dot methods
// circle1.showLocation();


// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");

// var a = 2;
// var b = function() { console.log("something"); };
// function doSomething(x) {
//   console.log(typeof(x));
// }
// doSomething(a);
// doSomething(b);


// 

//simulated really slow DB call.
// function getStuffFromDatabase(callback){
//   var data;
//   var myTimer = setTimeout(function(){
//     if (typeof(callback) == 'function'){
//       data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//       callback(data);
//     }
//   }, 10000);
//   return data;
// }    
// // ************CHANGES HERE **************
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
//     console.log(data, "ASynchronous");
//     for (var i = 0; i < data.length; i ++){
//       console.log(data[i].name);
//     }
//   });
//   console.log(data, "Synchronous");
// }
// //***************** END CHANGES **********************
// function catchFly(){
//   console.log('I just caught a fly!');
// }
// requestDataFromDatabase();
// // keep running my program!
// console.log('Hello');
// catchFly();
// //etc.

function getStuffFromDatabase(callback){
  var data;
  var myTimer = setTimeout(function(){
    if (typeof(callback) == 'function'){
      //it just got back from the DB!
      data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
      callback(data);
    }
  }, 10000);
  // it takes 10 seconds to get anything back <- you should fix your cloud server.!!!
  return data;
}    
//simulated request (failing);
function requestDataFromDatabase(){
  var data = getStuffFromDatabase(); // this should return my data right??
  console.log(data);
}
function catchFly(){
  console.log('I just caught a fly!');
}
requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.