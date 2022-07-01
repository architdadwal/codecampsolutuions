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
