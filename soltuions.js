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

//Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

//Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

testLessThan(10);

//Comparisons with the Logical And Operator
/*Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val >= 25 && val <= 50) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//Convert the logic to use else if statements.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);

//Logical Order in If Else Statements
//Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

/*Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge
*/

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else num >= 20;
  {
    return "Huge";
  }
  return "Change Me";
  // Only change code above this line
}

testSize(7);

//Golf Code

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

golfScore(5, 4);

/*Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta*/

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

/*Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff*/

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;

    case "c":
      answer = "cat";
      break;

    default:
      answer = "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/*Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High*/

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";

      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

//Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";

      break;

    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;

    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  /* if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }*/

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//Fix the function isLess to remove the if/else statements.

function isLess(a, b) {
  // Only change code below this line
  return a <= b;
  // Only change code above this line
}

isLess(10, 15);

//Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a < 0 || b < 0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

//You will write a card counting function.
//Black jack game

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");

//Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
const myDog = {
  // Only change code below this line
  name: "Tommy",
  legs: 4,
  tails: 1,
  friends: ["Jommy", "Tyson", "Rocky"],

  // Only change code above this line
};

/*Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.

*/

// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt; // Change this line

//Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.

// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};

// Only change code below this line
const entreeValue = testObj["an entree"]; // Change this line
const drinkValue = testObj["the drink"]; // Change this line

//Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

// Only change code below this line
const playerNumber = 16; // Change this line
const player = testObj[playerNumber]; // Change this line

//Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.

// Setup
const myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

// Only change code below this line

myDog.name = "Happy Coder";

//Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.

const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};

myDog.bark = "woof";

//Delete the tails property from myDog. You may use either dot or bracket notation.

// Setup
const myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};

// Only change code below this line
delete myDog.tails;

//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  /*switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }*/

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

//Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".

function checkObj(obj, checkProp) {
  // Only change code below this line

  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}
// Only change code above this line

//Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings.

const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],

    gold: true,
  },
  {
    artist: "BABU RAI",
    title: "BOOM",
    release_year: 1998,
    formats: ["CD", "8T", "LP"],

    gold: true,
  },
];

//Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.

const myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

const gloveBoxContents = myStorage.car.inside["glove box"];
//Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

//Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

//Using dot and bracket notation, set the variable secondTree to the second item in the trees list from the myPlants object.

const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

//You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Setup
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    records[id].hasOwnProperty("tracks") === false
  ) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

//Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.

// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

//Use a for loop to push the values 1 through 5 onto myArray.

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}
