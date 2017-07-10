function star_string(x){
    
    String.prototype.repeat = function( num ){
        return new Array( num + 1 ).join( this );
    }
    return '*'.repeat(x)
};

// console.log(star_string(8));

function draw_stars(numStars){

    let star = '';

    for(let i = 0; i < numStars.length; i++){
        
        if(numStars[i].constructor === String){            
            for(let k = 0; k < numStars[i].length; k++){
                star += numStars[i].substring(0,1).toLowerCase();
            }
        }

        for(let j = 0; j < numStars[i]; j++){
            star += '*';            
        }
        
        star += '\n';       
    }

    return star
    
};

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

console.log(draw_stars(x));