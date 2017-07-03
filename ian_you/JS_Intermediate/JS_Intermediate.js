// // PART I
//
// function star_string(number){
//   var stars = "";
//   for (let i=0; i<number; i++){
//     stars+="*";
//   }
//   return stars;
// }
//
// let stars = star_string(8)
// console.log(stars);
//
// // PART II
//
// let x = [4,6,1,3,5,7,25];
// function draw_stars(arr){
//   for (let i = 0; i< arr.length; i++){
//     var stars = ""
//     for (let j = 0; j < arr[i]; j++){
//       stars+= "*";
//     }
//     console.log(stars);
//   }
// }
//
// draw_stars(x)

// PART III
let y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];

function draw_stars_again(arr){
  for (var i = 0; i< arr.length; i++){
    var stars = ""
    var letters =""
    if (typeof(arr[i]) == 'string'){
      for (let j = 0; j < arr[i].length; j++){
        letters += arr[i].charAt(0).toLowerCase();
      }
      console.log(letters);
    }
    else if (typeof(arr[i]) == "number"){
      for (let j = 0; j < arr[i]; j++){
        stars+= "*";
      }
      console.log(stars);
    }
  }
}

draw_stars_again(y);
