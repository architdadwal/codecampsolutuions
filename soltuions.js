//addition
const sum = 10 + 10;
sum = 20;

//substraction
const difference = 45 - 33;
difference = 12;

//multiplication
const product = 8 * 10;
product = 80;

// divide

const quotient = 66 / 33;
quotient = 2;

// increment

/*Change the code to use the ++ operator on myVar.*/
let myVar = 87;

// Only change code below this line
myVar++;
88;

// escaping quotes
var myStr = 'I am a "double quoted" string inside "double quotes".';

//Quoting Strings with Single Quotes

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//Escape Sequences in Strings

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

//Concatenating Strings with Plus Operator

const myStr = "This is the start." + " This is the end.";

//Concatenating Strings with the Plus Equals Operator

let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

//Constructing Strings with Variables

const myName = "Archit Dadwal";
const myStr = "My name is " + myName + " and I am well";

//Appending Variables to Strings

const someAdjective = "really important in your life";
let myStr = "Learning to code is ";
myStr += someAdjective;

//Find the Length of a String

/* Setup
let lastNameLength = 0;
const lastName = "Lovelace"; */

// Only change code below this line
lastNameLength = lastName.length;

//Use Bracket Notation to Find the First Character in a String

/* Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace"; */

// Only change code below this line
firstLetterOfLastName = lastName[0];

// Understand String Immutability

/*myStr  = "Hello World";*/

myStr = "Hello World";

// Use Bracket Notation to Find the Nth Character in a String

/* Setup
const lastName = "Lovelace";
*/
// Only change code below this line
const thirdLetterOfLastName = lastName[2];

//Use Bracket Notation to Find the Last Character in a String

/* Setup
const lastName = "Lovelace";

 Only change code below this line*/
const lastLetterOfLastName = lastName[lastName.length - 1];

//Use Bracket Notation to Find the Nth-to-Last Character in a String
/* Setup
const lastName = "Lovelace";

// Only change code below this line*/
const lastLetterOfLastName = lastName[lastName.length - 1];

//Word Blanks

/*const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
*/
// Only change code below this line
const wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + " ";

//Store Multiple Values in one Variable using JavaScript Arrays

const myArray = ["donut", 1];

//Create a nested array called myArray.

const myArray = [
  ["om", 26],
  ["ram", 31],
];

//Create a variable called myData and set it to equal the first value of myArray using bracket notation.

const myArray = [50, 60, 70];
const myData = myArray[0];

//Modify the data stored at index 0 of myArray to a value of 45.

const myArray = [18, 64, 99];
myArray[0] = 45;

//Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

//Manipulate Arrays With push()
// =>Push ["dog", 3] onto the end of the myArray variable.

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line

myArray.push(["dog", 3]);

//Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

// Setup
const myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line

const removedFromMyArray = myArray.pop();
console.log(removedFromMyArray);
console.log(myArray);

//Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

// Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];

// Only change code below this line
const removedFromMyArray = myArray.shift();

//Add ["Paul", 35] to the beginning of the myArray variable using unshift().

//=> Setup
const myArray = [
  ["John", 23],
  ["dog", 3],
];
myArray.shift();

//=> Only change code below this line

myArray.unshift(["Paul", 35]);
console.log(myArray);

//Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

const myList = [
  ["ganmbhir", 0],
  ["sachin", 94],
  ["ganguly", 76],
  ["Dhoni", 100],
  ["rahane", 34],
];

/*Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function. */

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

/*Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.*/

function functionWithArgs(num1, num2) {
  console.log(num1 + num2);
}
functionWithArgs(34, 45);

//Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive(num) {
  return num * 5;
}
const result = timesFive(8);

/*Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

*/

// Declare the myGlobal variable below this line

function fun1() {
  // Assign 5 to oopsGlobal Here
  return (oopsGlobal = 5);
}

const myGlobal = 10;

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//Local Scope and Functions

function myLocalScope() {
  // Only change code below this line
  const myVar = 10;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);

//Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  return outerWear;
  // Only change code above this line
  return outerWear;
}

myOutfit();

//Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();

//Call the processArg function with an argument of 7 and assign its return value to the variable processed.

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  const removed = arr.shift();
  return removed;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

//Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
  // Only change code below this line

  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
  // Only change code above this line
}

//Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

// Setup
function testEqual(val) {
  if (val == 12) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

//Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

// Setup
function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

//The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

//Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

//Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
//Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
