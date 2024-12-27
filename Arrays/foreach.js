forEach - Understanding how it works
// ----------------------------------------------------------

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

// OUTPUT:
// Element: 1, Index: 0
// Element: 2, Index: 1
// Element: 3, Index: 2
// Element: 4, Index: 3
// Element: 5, Index: 4

// In the example above, `forEach` executes the provided function for each item in the array. 
// It takes the current element and its index as parameters and logs them to the console