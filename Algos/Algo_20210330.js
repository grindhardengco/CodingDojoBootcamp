// Predict the output of this code

var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
//fruit2 = "apples"
    
console.log(fruit2 + " and " + fruit1);
//"apples and apples"



// I meant to swap fruit1 and fruit 2. Did it do it? What is the problem with it if it didn't? 
//No swap, just partial...

// Only proceed if you've answered the above question

// Now let's look at a proper swapping method:

var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);

// What happens this time? What did we do differently to make it work?
//Completed swap, using extra variable.

// WARM UP

// Write some code that loops through and prints all the values in an array

function print(arr){
    for(i=0; i<array.length; i++){
        console.log(arr[i]);
    }
}

// CHALLENGE

// Write a function that reverses all the values in an array

// Ex: given an array with values [1,2,3,4,5], we should get back an array of [5,4,3,2,1]

function reverse(arr){
    var temp = [];
    for(i=arr.length-1; i>=0; i--){
        temp.push(arr[i]);
    }
    arr = temp;
    console.log(arr);
}

reverse([1,2,3,4,5]);