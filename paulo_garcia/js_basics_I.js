// Basic 1:
//
//   var x = [];
//   console.log(x);
//
//   x.push('coding', 'dojo', 'rocks')
//   x.pop()
// console.log(x);
//
//
// Basic 2:
//
// const y = [];
// console.log(y);
//
//   y.push(88);
//   console.log(y);
//
// this is valid since u can add to the array just not completely change the array
//
//
// Basic 3:
//
// var z=[9, 10, 6, 5, -1, 20, 13, 2]
//
//   for ( var i=0; i < z.length; i++){
//     console.log(z[i]);
//   }
//   z.pop();
//   console.log(z);
//
//
// Basic 4:
//
// var names=['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
// for ( var i=0; i < names.length; i++){
//   let name = names[i];
//     if(name.length >= 5){
//       console.log(name);
//     };
// };
//
//
// Basic 5:
//
// function yell(str){
//   var str='hello';
//   var res = str.toUpperCase()
//     console.log(res);
// }


//pass some data to a callback

function something(arr, callback){
  // var arr = [1,2,3];
  for(let value of arr){
    callback(value);
  }
  // for(let i = 0; i < arr.length; i++){
  //   callback(arr[i])
  // }
}

something([1,2,3], function(num){
  console.log(num * 2);
})
