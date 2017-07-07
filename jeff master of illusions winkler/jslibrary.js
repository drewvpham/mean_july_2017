//Can we make this into a method of an object?
function each(arr, callback) {
  // loop through the array
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]); // invoking the callback many times... delegation!
  }
}

var _ = {
    map: function(arr, callback) {
      for (i = 0; i < array.length; i++) {
        var arr2.push(arr[i] * 3);
      }
      return arr2;
    },
    reduce: function(arr) {
      var arr2 = array_sum(arr)
      return arr2;
    },

    find: function(arr, num) {
        for (i = 0; i < array.length; i++) {
          if (arr[i] % num = = 0) {
            var arr2 = arr[i]
          }
          return (arr2)
        },

      filter: function(arr, num) {
        for (i = 0; i < array.length; i++) {
          if (arr[i] % num = = 0) {
            var arr2.push(arr[i])
          }
          return (arr2)
        },
        reject: function() {
          for (i = 0; i < array.length; i++) {
            if (arr[i] % num ! = 0) {
              var arr2.push(arr[i])
        }
        return (arr2)
      }
        // you just created a library with 5 methods!
