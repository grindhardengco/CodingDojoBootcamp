//1
var hello;
console.log(hello);                                   
hello = 'world';     

//2
var needle = 'haystack';
function test(){
	var needle = 'magnet';
	console.log(needle);
}
test();

//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//4
var food = 'chicken';
function eat(){
	var food;
    food = 'half-chicken';
	console.log(food);
	food = 'gone';
}
console.log(food);
eat();

//5
var mean;
// mean();
console.log(food);
mean = function() {
	var food;
    food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);

//6
var genre
console.log(genre);
genre = "disco";
function rewind() {
	var genre;
    genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
rewind();
console.log(genre);

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);