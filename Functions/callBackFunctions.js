// A callback function is a function that is passed as an argument to another function and is executed after the 
// first function has finished its execution. 

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
// Welcome to JavaScript learning!

// In this example, `showMessage` is passed as a callback to the `greetUser` function. 
// When `greetUser` finishes greeting, it calls `showMessage` to display a second message.

//Example of Callback in Event Handling:

// HTML event handling often uses callback functions.
// Example: A button click event

document.getElementById('myButton').addEventListener('click', function() {
  console.log("Button clicked!");
})


// How I Learned Callback Function:

// A callback function is a function that is passed as an argument to another function and is executed when 
// the first function has finished its task. This allows for more flexible, reusable, and modular code.
// While the callback function is executed, the main function doesn't "wait" for it to finish but continues executing 
// other tasks (especially in asynchronous code).

//-----------------------------------------------
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

// Explanation of how it works:
// 1. `processArray` takes two arguments: an array and a callback function.
// 2. It iterates through the array using `forEach`.
// 3. On each iteration, the callback function is executed with the current array item.
// 4. The callback function processes the item (e.g., multiplies it by 2 or 3).
// 5. The processed value is stored in the `result` array.
// 6. Finally, `processArray` returns the `result` array with all the processed items.