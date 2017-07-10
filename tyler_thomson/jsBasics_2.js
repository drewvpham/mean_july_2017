function magic_multiply(x, y){
    if (x === 0 && y === 0){
        return "All inputs 0";
    }
    else if(Array.isArray(x)){
        for (var i = 0; i < x.length; i++){
            x[i] *= y;
        }
        return x;
    }
    else if(x === Number && y === Number){
        x *= y;
        return x;
    }
    else if(typeof x === 'number' || x instanceof Number){
        return "Error: Cannot multiply by string"
    }
    else if(typeof x === "string" || x instanceof String){
            x = x.concat(x, x, x);
            return x;
    }
}

// console.log(magic_multiply(5, 2))
// console.log(magic_multiply(0, 0))
// console.log(magic_multiply([1, 2, 3], 2))
// console.log(magic_multiply(7, 'three'))
console.log(magic_multiply('Brendo', 4))