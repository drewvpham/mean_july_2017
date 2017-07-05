//part1
function star_string(num) {
    star = ""
    for (var i = 0; i < num; i++) {
        star += "*";
    }
    return star;
}

let stars = star_string(8);
console.log(stars);

//part2,part3
function draw_stars(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].constructor == String) {
            var a = "";
            for (var j = 0; j < arr[i].length; j++) {
                a += arr[i][0].toLowerCase();
            }
            console.log(a); 
        }else{
            let star = star_string(arr[i]);
            console.log(star);
        }
    }
}

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
draw_stars(x)
