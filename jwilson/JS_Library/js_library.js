var _ = {
   map: function(arr, func) {
        var newArr = [];
        for(var i= 0; i < arr.length; i++){
            newArr.push(func(arr[i]));
        }
            
        return newArr;
     
   },
   reduce: function(arr, callback, memo) {
       //memo is defined
        if(memo){
            for(var i = 0; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }            
            return memo;
       }
        if(!memo){
            memo = 0;
            for(var i = 0; i < arr.length; i++){
                memo = callback(memo, arr[i]);
            }            
            return memo;
        }
        
       
   },
   find: function(arr, callback) {   
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
};

console.log(_.map([1, 2, 3, 4, 5, 6], function(num){return num * 3}));
console.log(_.reduce([1, 2, 3, 5], function(memo, num){return memo + num;}));
console.log(_.find([3, 6, 9, 4], function(num){return num % 3 == 0;}));
console.log(_.filter([1, 4, 9, 16], function(num){return num % 2 != 0;}));
console.log(_.reject([1, 4, 9, 16], function(num){return num % 2 != 0;}));
