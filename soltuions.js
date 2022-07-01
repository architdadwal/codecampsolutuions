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
