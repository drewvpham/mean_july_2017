// Basic 1
x = []
console.log(x)

x.push('coding')
x.push('dojo')
x.push('rocks')
x.pop()

console.log(x)
//[ 'coding', 'dojo' ]

// Basic 2

const y = []
console.log(y)
y.push(88)
console.log(y)

// it gets pushed

// Basic 3
//printing all number
var z = [9,10,6,5,-1,20,13,2]
for (let i = 0; i<z.length; i++){
  console.log(z[i]);
}

// printing except the last number
for (let i = 0; i<z.length-1; i++){
  console.log(z[i]);
}

// Basic 4

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']

for (let i = 0; i < names.length ; i++){
  console.log(names[i].length)
}

// printing only name swith a length of 5
for (let i = 0; i < names.length ; i++){
  if (names[i].length == 5){
    console.log(names[i]);
  }
}


// Basic 5

function yell(string){
  newString = string.toUpperCase()
  console.log(newString);
}
yell('hello');
