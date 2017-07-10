function magic_multiply(x, y){
    if(y.constructor != Number){
        return "You must multiply by a number.";    
    }else{
        if(x.constructor == Array){
            for(var i = 0; i < x.length; i++){
                x[i] *= y;
            }
            return x;
            
        } else if(x.constructor == String){
            String.prototype.repeat = function( num ){
                return new Array( num + 1 ).join( this );
            }
            
            return x.repeat(y)
        }        

    }       
       
};


console.log(magic_multiply([1,2,3], 3));
