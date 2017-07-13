

// //pass some data to a callback
//
//     function something(arr, callback){
// // var arr = [1,2,3];
//       for(let value of arr){
//         callback(value);
//       }
// // for(let i = 0; i < arr.length; i++){
// //   callback(arr[i])
// // }
//     }
//
//     something([1,2,3], function(num){
//       console.log(num * 2);
//     })

function map(arr, callback){
  new array = []
  for(var i=0; i<arr.length; i++){
    new array.push(callback(arr[i]));
  }
  return new array;
}

function reduce(arr, callback){
  new array = []
  for(var i=0; i<arr.length; i++){
    new array.reduce(callback(arr[i]));
  }
  return new array;
}

function find(arr, callback){
  new array = []
  for(var i=0; i<arr.length; i++){
    new array.find(callback(arr[i]));
  }
  return new array
}

function filter(arr, callback){
  new array = []
  for(var i=0; i<arr.length; i++){
    new array.filter(callback(arr[i]));
  }
  return new array
}

function reject(arr, callback){
  new array = []
  for(var i=0; i<arr.length; i++){
    new array.reject(callback(arr[i]));
  }
  return new array
}
