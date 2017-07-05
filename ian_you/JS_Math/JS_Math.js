function zero_negativity(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      return false;
    }
  }
  return true
}

console.log('Math 1', zero_negativity([6,-5,5]))
console.log('Math 1', zero_negativity([6,5,5]))

function is_even(number){
  if (number %2 ==0){
    return true;
  }
  else {
    return false;
  }
}

console.log('Math 2', is_even(5))
console.log('Math 2', is_even(4))

function how_many_even(arr){
  var count = 0;
  for (let i = 0; i < arr.length ; i++){
    if (is_even(arr[i])){
      count++;
    }
  }
  return count;
}

console.log('Math 3', how_many_even([2,4,5,6,7]))

function create_dummy_array(n){
  dummy = []
  var i= 0
  while (i !== n){
    let randomNumber = Math.floor(Math.random()*10);
    dummy.push(randomNumber);
    i++
  }
  return dummy
}

console.log('Math 4', create_dummy_array(5))

function random_choice(arr){
  let index = Math.floor(Math.random()*arr.length)
  return arr[index]
}

console.log('Math 5', random_choice([1,2,3,4,5,6,7,8,9]))
