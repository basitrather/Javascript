//Generally we create arrays like this👇
const arr = [1, 2, 34, 55, 6];
// or
const arr2 = new Array(1, 2, 33, 4, 5, 65);

// But there are more ways of creating arrays with the help of some methods

// Fill Method is used to fill the elements in the array
const newArray = new Array(7); //This creates empty array of length 7
newArray.fill(4); // This fills the array with 4 in all the 7 empty elements
console.log(newArray); //[4, 4, 4, 4, 4, 4, 4];

//Array.from is used to create a new array and fill elements to it via a callBack function
const x = Array.from({ length: 7 }, () => 7);
console.log(x); //[7, 7, 7, 7, 7, 7, 7];

//Via this method we can manipulate the elements to be added in the array. callBackFn works same as other methods had

const evenNumberArr = Array.from(
  { length: 10 },
  (current, index, arr) => index * 2
); // We create an array containing even numbers of elements
console.log(evenNumberArr);

// Exercise: create an array containing 100 random dice rolls
const diceRolls = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(diceRolls);

//We can also select node list in the DOM and then convert it into the array

// lets suppose this is our Html
/*
    <button>Click 1</button>
    <button>Click 1</button>
    <button>Click 2</button>
    <button>Click 3</button>
*/
// By default
const buttons = document.querySelectorAll("button");
console.log(buttons); // 👉 NodeList(3) [button, button, button]

// Convert NodeList to Array
const btnArray = Array.from(document.querySelectorAll("button"));
console.log(btnArray); // 👉 [button, button, button] (real array)

// Now you can use array methods like .map(), .filter(), .reduce(), etc.
const btnTexts = Array.from(
  document.querySelectorAll("button"),
  (btn) => btn.textContent
);
console.log(btnTexts); // 👉 ["Click 1", "Click 2", "Click 3"]

// ---------------------------

// We can also convert NodeList to an array by the spread operator
const btnTexts2 = [...document.querySelectorAll("button")];
console.log(btnTexts); //👉 ["Click 1", "Click 2", "Click 3"]
