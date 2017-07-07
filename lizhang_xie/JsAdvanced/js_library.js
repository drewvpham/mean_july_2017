var _ = {
   map: function(arr,callback) {
     //code here;
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr.push(callback(arr[i]));
    }
    return newarr;
   },
   reduce: function(arr, callback, memo) { 
     // code here;
    if (!memo) {
        memo = arr[0];
    for (var i = 1; i < arr.length; i++) {
        memo = callback(memo, arr[i]);
    }; 
    }else {
        for (var i = 0; i < arr.length; i++) {
            memo = callback(memo, arr[i])
        };
    };
    return memo;
   },
   find: function(arr, callback) {   
     // code here;
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        };
    }
   },
   filter: function(arr, callback) { 
     // code here;
    let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newarr.push(arr[i]);
        };
    };
    return newarr;
   },
   reject: function(arr, callback) { 
     // code here;
     let newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            newarr.push(arr[i]);
        };
    };
    return newarr;
   }
 }

let a = _.map([1, 2, 3], function(num){ return num * 3; });
console.log('------------------------------------');
console.log(a);
console.log('------------------------------------'); 

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log('------------------------------------');
console.log(sum);
console.log('------------------------------------');

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log('------------------------------------');
console.log(even);
console.log('------------------------------------');

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log('------------------------------------');
console.log(evens);
console.log('------------------------------------');

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log('------------------------------------');
console.log(odds);
console.log('------------------------------------');

var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduce(list, function(a, b) { return a.concat(b); }, []);
console.log('------------------------------------');
console.log(flat);
console.log('------------------------------------');