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