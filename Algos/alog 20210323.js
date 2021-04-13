// Week 1 Day 2 Web Fundamentals
// Predict the outputs
// Question 1
var a = 25;
a = a - 13;
//a=12
console.log(a/2);
//log 6
    
a = "hello"; //JS will change var type
console.log(a + " hello");
//Log hello hello



// Question 2
for(var i=0; i<10; i++) {
    console.log(i);
    i = i + 3; 
}

//Log 0,4,8
console.log("outside of the loop " + i);
//Log   outside of the loop 12



// Question 3
function getTotal(arrayOfNumbers) {
//arrayOfNumbers = [1,3,5]
    
  var sum = arrayOfNumbers[0];
  //sum=2
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    //i=0
    //i=1
    //i=2
    sum += arrayOfNumbers[i];
    //arrayOfNumbers[0]=1, sum=2
    //arrayOfNumbers[1]=3, sum=5
    //arrayOfNumbers[2]=5, sum=10
    console.log("the current sum is: " + sum); 
  }
  //Log the current sum is: 2, the current sum is 5, the current sum is 10 
    
  console.log("the total is: " + sum);
  //Log the total is: 10
    
}
    
getTotal([1, 3, 5]);