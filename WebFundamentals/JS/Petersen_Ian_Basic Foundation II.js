// Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(makeItBig([-1,3,5,-5]));

// Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    min = arr[0];
    max = arr[0];
    for(i=1; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log(min)
    return max;
}

printLowReturnHigh([-1,3,5,-5]);
console.log(max);


// Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printReturn(arr){
    console.log(arr[arr.length-2])
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            return arr[i];
        }
    }
}

console.log(printReturn([-1,3,5,-5]));


// Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function double(arr){
    var doubleArr = [];
    for(i=0; i<arr.length; i++){
        doubleArr.push(arr[i] * 2);
    }
    return doubleArr;
}

console.log(double([1,2,3]));

// Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function posCount(arr){
    var count = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            count = count + 1;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

console.log(posCount([-1,1,1,1]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evenOdd(arr){
    for(i=2; i<arr.length; i++){
        if(arr[i-2] % 2 != 0 && arr[i-1] % 2 != 0 && arr[i] % 2 != 0 ){
            console.log("That's odd!");
        }
        if(arr[i-2] % 2 == 0 && arr[i-1] % 2 == 0 && arr[i] % 2 == 0 ){
            console.log("Even more so!");
        }       
    }
}

evenOdd([1,2,3,3,3,4,5,6,6,6,7,8,9,9,9,10]);

// Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function addOne(arr){
    for(i=1; i<arr.length; i +=2){
        arr[i] = arr[i] + 1;
    }
    for(i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

addOne([1,2,3,4,5]);
addOne([1,2,3,4,5,6]);

// Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function prevLength(arr){
    for(i=arr.length-1; i>0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(prevLength(["hello","dojo","awesome"]));

// Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr){
    var newArr = [];
    for(i=0; i<arr.length; i++){
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

console.log(addSeven([1,2,3]));

// Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    for(i=0; i<Math.floor(arr.length/2); i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]];
    }
    return arr;
}

console.log(reverse([1,2,3,4,5]));

// Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negatory(arr){
    var negArr = arr;
    for(i=arr.length-1; i>=0; i--){
        if(arr[i]>0){
            negArr[i] = arr[i] * -1;
        }
    }
    return negArr;
}

console.log(negatory([-1,3,5,-5]));

// Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function hungry(arr){
    var meals = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            meals = meals + 1;
        }
    }
    if(meals == 0){
        console.log("I'm still hungry.")
    }
}

hungry([1,2,3,4,5]);

// Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function swap(arr){
    if(Math.floor(arr.length/2) <= 2){
        [arr[0],arr[arr.length-1]] = [arr[arr.length-1],arr[0]];
    }
    
    else{
        [arr[0],arr[2],arr[arr.length-3],arr[arr.length-1]] = [arr[arr.length-1],arr[arr.length-3],arr[2],arr[0]];
    }
}

console.log(swap([1,2,3,4,5,6,7]));

// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scale(arr, num){
    for (i=0; i<arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}

console.log(scale([1,2,3],3));