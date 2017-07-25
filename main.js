// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: undefined


// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A:the string "Tim"


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:undefined


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: the string "Hello, how are you? " + givenName


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A:40


// 6.
// What is `math` set to?
math = high - "5";
// A:45


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:
let calc = today - born;
console.log("Tim is " + calc + " years old.")



// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = me;
let instructorName = prof;


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:

yourName = Kevin;
instructorName = Daniel;

// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 1;
let myString = 'Hi';
let myBoolean = true;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A: I typed nothing to leave it undefined.


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A. x = true


// 12.
let y = (false == "");
// A. y = true


// 13.
let z = (0 == "");
// A. z = true


// 14.
let a = (null == null);
// A. a = true


// 15.
let b = (undefined == undefined);
// A. b = true


// 16.
let c = (undefined == null);
// A. c = true


// 17.
let d = (null == false);
// A. d = false


// 18.
let e = (NaN == null);
// A. e = false


// 19.
let f = (NaN == NaN);
// A. f = false


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if(thristy !== true){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False! bc x = NaN


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False!


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A:


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True!


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
