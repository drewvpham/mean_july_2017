// Math 1

// function zero_negativity(arr){
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == 0){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(zero_negativity([0, 1, 2, 3]));

// Math 2
// function is_even(num){
//     if (num % 2 == 0){
//         return true;
//     }
//     return false;
// }
// console.log(is_even(5));

// Math 3
// function how_many_even(arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 == 0){
//             count += 1;
//         }
//     }
//     return count;
// }
// console.log(how_many_even([1, 2, 3, 4, 5, 6]));

// Math 4
// function create_dummy_array(num){
//         let arr = [];
//         for (let i = 0; i < num; i++) {
//             let a = Math.floor(Math.random() * 10)
//             arr.push(a);
//         }
//         return arr;
// }
// console.log(create_dummy_array(7));

Math 5
function random_choice(arr){
    let index = arr[Math.floor(Math.random()*arr.length)];
    return index; 
}
console.log(random_choice([1, 8, 0, -1, 9]));