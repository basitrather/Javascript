// The `forEach` method in JavaScript is used to execute a function for each element in an array.
// It takes a callback function as an argument, and the callback function is executed for every element in the array.
// The callback function can accept three parameters:
// - element: The current element being processed.
// - index: The index of the current element (optional).
// - array: The array that `forEach` is looping over (optional).

// Example of using forEach:

const numbers = [1, 2, 3, 4, 5];

// Using a function in forEach to log each element and its index
numbers.forEach(function (element, index) {
  console.log(`Element: ${element}, Index: ${index}`);
});
// To get better understanding how for each works first understand what is a callback function in function directory