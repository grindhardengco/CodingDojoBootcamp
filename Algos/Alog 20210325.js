// Question 1
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
//Log 5

setX(15);
console.log(x);
//Log 15



// Question 2
var x = 5;
    
function addToX(amount) {
    return x + amount;
    //5+-10 = -5

    console.log("hello there");
    //Log 
}
    
console.log(x);
//Log 5

var result = addToX(-10); 
//result = -5

console.log(result);
console.log(x);

//Log: 5,-5,5  (hello there is excluded because return exits function?

// Question 3
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        //arr.length=5, /2= 2.5
        //left=0,1

        var right = arr.length-1-left;
        //right= 5-1-1=3
                         
        if(arr[left] != arr[right]) {
            //arr[1]=1 != arr[3]=2, TRUE
            return "Not a pal-indrome!";
        }
        //does return command break for loop?  YES
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
//Not a pal-indrome
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);
//Pal-indrome!