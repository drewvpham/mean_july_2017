// function zero_negativity(arr){
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             return false;
//         }
        
//     }
//     return true;
// };

// console.log(zero_negativity([1,9,10,11]));

// function isEven(num){
//     if(num % 2 == 0){
//         return true;
//     } else {
//         return false;
//     }
// };

// // console.log(isEven(6));

// function how_many_even(arr){
//     let newArr = []
//     for(var i = 0; i < arr.length; i++){
//         if(isEven(arr[i])){
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr.length
// };

// console.log(how_many_even([1,2,4,6,7]));

// function create_dummy_array(n){
//     let newArr = []
//     for(var i = 0; i <= n-1; i++){
//         newArr.push(Math.floor(Math.random() * 10));
//     }
//     return newArr;
// }
// console.log(create_dummy_array(7));

function random_choice(arr){
    for(var i = 0; i < arr.length; i++){
        return arr[Math.floor(Math.random()*arr.length)];
    }
}

console.log(random_choice([1,5,3,9,10,'jon',true,[3,9,20,10]]));