//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}


var _ = {
   map: function(list, callback) {
     for (let i = 0; i < list.length; i++){
       list[i] = callback(list[i]);
     }
     return list
   },
   reduce: function(list, callback, memo) {
     if (typeof(memo) === 'undefined') {
       memo = list[0];
       for (var i = 0; i < list.length-1; i++){
         list[i] = list[i+1]
       }
       list.pop();
     }
     for (var i = 0; i < list.length ; i++){
       memo = callback(memo, list[i])
     }
     return memo;
   },
   find: function(list, callback) {
     var i = 0
     while (!callback(list[i])){
       i++;
     }
     return list[i]
   },
   filter: function(list, callback) {
     var answer = [];
     for (var i =0; i < list.length; i++){
       if (callback(list[i])){
         answer.push(list[i]);
       };
     }
     return answer;
   },
   reject: function(list, callback) {
     var answer = [];
     for (var i = 0; i < list.length; i++){
       if (!callback(list[i])){
         answer.push(list[i]);
       };
     }
     return answer;
   }
 }
// you just created a library with 5 methods!

test_map = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(test_map);

test_reduce1 = _.reduce([1, 2, 3], function(memo, num){ return memo + num; });
console.log(test_reduce1);

test_reduce1 = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 100);
console.log(test_reduce1);


test_find = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(test_find);

test_filter = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(test_filter);

test_reject = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(test_reject)
