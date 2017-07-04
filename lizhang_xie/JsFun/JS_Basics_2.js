function magic_multiply(x, y){
    // --- your code here ---
    if (y.constructor == String) {
        var a = "Error: Can not multiply by string"
    }
    else if(x.constructor == Array){
        var a = []
        for (var i = 0; i < x.length; i++) {
            a.push(x[i]*y);
        }
    }
    else if(x.constructor == String){
        var a = '';
        for (var i = 0; i < y; i++) {
            a = a + x;
        }
    }else{
        var a = x*y;   
    }
    return a;
}

let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0"
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string"
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
