var _ = {
    map: function(arr, callback) {
        newArray = [];
        for (let i = 0; i < arr.length; i++){
            newArray.push(callback(arr[i]));
        }
        return newArray;
   },
   reduce: function(arr, callback, memo) {
        if(memo){
            for(var i = 0; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }
            return memo;
       }
        else if(!memo){
            memo = 0;
            for(var i = 0; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }
            return memo;
        }
   },
   find: function(arr, callback){
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i]) == true){
               return arr[i]; 
           }
        } 
   },
   filter: function(arr, callback) { 
        let newArray = [];
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i]) == true){
                newArray.push(arr[i]);
            }
        }
        return newArray;
   },
   reject: function(arr, callback) { 
        let newArray = [];
        for(let i = 0; i < arr.length; i++){
            if(callback(arr[i]) == false){
                newArray.push(arr[i]);
            }
        }
        return newArray;
   }
 }
// let newNums = _.map([1, 2, 3, 4, 5, 6], function(num){return num * 3});
//  console.log(newNums);
let reduceArray = _.reduce([1, 2, 3, 5], function(num, memo){return memo + num;});
console.log(reduceArray);
// let found = _.find([3, 6, 9, 4], function(num){return num % 6 == 0;});
// console.log(found);
// let found = _.filter([1, 4, 9, 16], function(num){return num % 2 != 0;});
// console.log(found);
// let rejected = _.reject([1, 4, 9, 16], function(num){return num % 2 != 0;})
// console.log(rejected);