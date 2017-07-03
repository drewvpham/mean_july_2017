function  magic_multiply(x,y){
  // TEST 5
  if (typeof(x) === "string"){
    let temp = x
    for (let i = 0; i<y-1; i++){
      x += temp
    }
  }

  // // TEST 4
  else if (typeof(y) === 'string'){
    x="Error: Can not multiply by string"
  }
  // TEST 3
  else if (Array.isArray(x) == true){
    for (let i = 0; i<x.length; i++){
      x[i] = x[i]*y
    }
  }
  // TEST 2
  else if (x == 0 && y == 0){
    x = "All inputs 0"
  }
  // TEST 1
  else{
    x = x * y
  }


  return x
}

let test1 = magic_multiply(5,2)
console.log(test1);

let test2 = magic_multiply(0,0)
console.log(test2);

let test3 = magic_multiply([1,2,3],2)
console.log(test3);

let test4 = magic_multiply(7,'three')
console.log(test4);

let test5 = magic_multiply('Brendo',4)
console.log(test5);
