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

//  I Learned forEach:

// In simple terms, the `forEach` method helps in iterating over an array, and for each element,
// a function is executed. I learned that `forEach` automatically handles the iteration,
// and I can pass a callback function to define what happens with each array element.
// The callback takes three parameters:
// 1. element: The current element in the array.
// 2. index: The index of the element in the array (this is optional).
// 3. array: The array being iterated (also optional).

// In my learning, I understood that:
// - `forEach` is useful for situations where you want to process each element in an array
// - It does not return a value and cannot be stopped or modified during iteration.
// - I learned that `forEach` doesn't allow the use of `break`, `continue`, or `return` to exit the loop early.

// Reflecting on this, I can easily use `forEach` when I need to perform some task with each element in an array, 
// such as logging values or applying transformations.
// To get better understanding how for each works first understand what is a callback function in function directory