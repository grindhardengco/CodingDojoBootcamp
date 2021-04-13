function parensValid(input){
    var r = 0;
    var l = 0;
    var i = 0;
    while(i < input.length ){
        if(input[i] == '('){
            l++
        }
        if(input[i] == ')'){
            r++
        }
        if(r > l){
            return false;
        }
        i++
    }
    if(r != l){
        return false;
    }
    return true;
}
console.log(parensValid('(iwuwu)90)('))

function bracesValid(input){
    var r = 0;
    var l = 0;
    var lb = 0;
    var rb = 0;
    var lc = 0;
    var rc = 0;
    var i = 0;
    while(i < input.length ){
        if(input[i] == '('){
            l++
        }
        else if(input[i] == '['){
            lb++
        }
        else if(input[i] == ')'){
            r++
        }
        else if(input[i] == ']'){
            rb++
        }
        else if(input[i] == '{'){
            lc++
        }
        else if(input[i] == '}'){
            rc++
        }
        if(r > l){
            return false;
        }
        if(rb > lb ){
            return false;
        }
        if(rc > lc ){
            return false;
        }
        i++
    }
    if(r != l || rb != lb || rc != lc){
        return false;
    }
    return true;
}
console.log(bracesValid('[(uie])(){}'))

//Can consolidate this by writing a function to handle any single pair of characters, then repeat the function.  A nested function.   