// A callback function is a function that is passed as an argument to another function and is executed after the first function has finished its execution.

// Example of a callback function in action:

function greetUser(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // This will run the callback after greeting
}

function showMessage() {
  console.log("Welcome to JavaScript learning!");
}

greetUser("Basit", showMessage);

// OUTPUT:
// Hello, Basit

// In this example, `showMessage` is passed as a callback to the `greetUser` function.
// When `greetUser` finishes greeting, it calls `showMessage` to display a second message.

//Example of Callback in Event Handling:

// HTML event handling often uses callback functions.
// Example: A button click event

document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// How I Learned Callback Function:

// A callback function is a function that is passed as an argument to another function and is executed when the first function has finished its task. This allows for more flexible, reusable, and modular code.
// While the callback function is executed, the main function doesn't "wait" for it to finish but continues executing other tasks (especially in asynchronous code).

//Exercise : Understanding callback functions with processArray example

// Callback function: Multiplies a number by 2
function multiplyByTwo(number) {
  return number * 2;
}

// Callback function: Multiplies a number by 3
function multiplyByThree(number) {
  return number * 3;
}

// Function that accepts an array and a callback function
// This processes the array using the callback function
function processArray(array, callback) {
  let result = []; // Array to store processed results

  // Using forEach to iterate over the array
  array.forEach(function (item) {
    // Call the callback function on each item
    const processedValue = callback(item);
    result.push(processedValue); // Store the processed value in the result array
  });

  return result; // Return the processed result array
}

// Example usage:
const numbers = [1, 2, 3]; // Array to process

// Processing with multiplyByTwo callback
const doubledNumbers = processArray(numbers, multiplyByTwo);
// Output: [2, 4, 6]

// Processing with multiplyByThree callback
const tripledNumbers = processArray(numbers, multiplyByThree);
// Output: [3, 6, 9]

// callBack Function example
const oneWord = function (string) {
  //low OrderFnction
  return string.replaceAll(" ", "").toLowerCase();
};
const firstUpperWord = function (string) {
  //low OrderFnction
  const [first, ...restWords] = string.split(" ");
  return [first.toUpperCase(), ...restWords].join(" ");
};
const transformer = function (string, callFunction) {
  //higher OrderFnction
  console.log(`orginal: ${string}`);
  console.log(`transformed: ${callFunction(string)}`);
  console.log(`Transformed by: ${callFunction.name}`);
};
transformer("basit has done BCA", firstUpperWord);
transformer("tehsheem has done Btech(CSE)", oneWord);
