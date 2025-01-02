// MAP METHOD 

// `map()` creates a new array by applying a function to each element of the original array. 
// It does not modify the original array and always returns a new array.

// Syntax:
// array.map(function(element) {
//   return transformedElement;
// });


// Example 1: Doubling the numbers
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled);  // Output: [2, 4, 6, 8]


// Example 2: Multiplying numbers by a factor
const numbersArray = [1, 2, 3];
const multiplyBy = 3;
const result = numbersArray.map(num => num * multiplyBy);
console.log(result);  // Output: [3, 6, 9]


// Key Points:
// 1. Does not modify the original array.
// 2. Returns a new array with transformed values.
// 3. The callback function is called for each element.


// HOW I UNDERSTOOD THE MAP METHOD


// `map()` helps create a new array by transforming each element in the original array. 
// It returns a new array without modifying the original one. In the example, 
// I multiplied each element of `[1, 2, 3]` by `3` to get `[3, 6, 9]`.

// `map()` is useful for transforming data while keeping the original data intact.