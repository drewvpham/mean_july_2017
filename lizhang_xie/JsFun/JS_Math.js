//math1
function zero_negativity(arr) {
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (element < 0) {
            return false;
        }
    }
    return true;
}

var arr1 = zero_negativity([1,-3,4]);
console.log(arr1);

//math2
function is_even(num) {
    if (num % 2 == 0) {
        return true;
    }else{
        return false;
    }
}

var num = is_even(2);
console.log(num);

//math3
function how_many_even(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (is_even(element)) {
            count++;
        }
    }
    return count;
}

var arr2 = how_many_even([1,2,4,4]);
console.log(arr2);

//math4
function create_dummy_array(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
}

var arr3 = create_dummy_array(3);
console.log(arr3);

//math5
function random_choice(arr) {
    var length = arr.length;
    return arr[Math.floor(Math.random()*length)]
}

var arr4 = random_choice([1,2,3]);
console.log(arr4);