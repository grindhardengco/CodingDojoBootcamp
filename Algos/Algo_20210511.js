var newString = "";
function rotate(string, int){
    if(int > string.length){
        console.log("The integer must be less than string length.")
        return null;
    }
    for(i=string.length - int; i<string.length; i++){
        newString += string[i];
    }
    for(j=0; j<string.length - int; j++){
        newString += string[j]
    }
    return newString;
}
var input = "this is a string"

// console.log(rotate(input, 5));

function isRotated(string1, string2){
    var lastChar = string2[string2.length-1];
    //does lastChar exist in string1?
    for(let i=0; i<string1.length-1; i++){
        if(string1[i] == lastChar){
            let match = true;
            //does string1[i+1] == string2[0]?
            for(var j=0; j<string2.length-1; j++){
                if(string1[i+1] != string2[j]){
                    match = false;
                    break;
                }
            }
            for(k = j;  k<string1.length-1; k++){
                if(string1[k] != )
            }
            //if so keep comparing strings;
            //if not look for the next instance of lastChar and repeat this if statement
        }
    }
}

isRotated("this is a string","tringthis is a s")

//this is a string
//tringthis is a s