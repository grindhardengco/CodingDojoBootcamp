//1
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";
//myString was typed as a string so a number will not work.  Put quotation marks around the 9 to make it a string.

//2
function sayHello(name: string){
   return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9"));
//same as above - put quotations around 9

//3
function fullName(firstName: string, lastName: string, middleName: string){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones", ""));
//pass empty string?  I don't like that it adds an extra space to the output... not sure how to avoid this...

//4
interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
//jay.belt != jay.belts, add "s" to ByteLengthQueuingStrategy

//5
class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Shane","NA");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing");
//   fullName: "Alan Turing",
//   firstName: "Alan",
//   lastName: "Turing"
//}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

//There might be a more efficient way but I declared Alan as new Ninja class and added "new" to before Ninja();  
//I also passed through Alan's first and last name in the class params.  
//Then when calling the study function "turing" could pass through as a predefined or established Ninja class.

//6
var x: number;

var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: number) => x * x;
// This is not showing me what I want:
// removed the curly braces and assigned a type to x.
console.log(square(4));
// This is not working:
var multiply = (x:number , y:number) => x * y;
// Nor is this working:
//assigned types to x & y
console.log(multiply(3,4));
var math = (x: number, y: number) => {
    let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}
console.log(math(3,4))

//7
class Elephant {
   constructor(public age: number){}
    birthday = () => this.age++;
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
//add parans for params and add arrow

