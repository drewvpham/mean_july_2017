// Basic 1
var x = [];
x.push('coding');
x.push('dojo');
x.push('rocks');
x.pop();

console.log(x);

//Basic 2
const y = [];
y.push(88)
console.log(y);

//Basic 3
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for(var i=0; i<z.length; i++){
    if (i == z.length-1) {
        continue;
    }
    console.log(z[i]);
}

//Basic 4
var name = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i = 0; i < name.length; i++) {
    if (name[i].length == 5) {
        console.log(name[i].length);        
    }
}

//Basic 5
function yell(string) {
    return string.toUpperCase();
}
x = yell("lasdf");
console.log(x);