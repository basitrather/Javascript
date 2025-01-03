// Function expressions store functions inside variables

const multiply = function (a, b) {
    return a * b; // Multiplies two numbers
};

// Calling the function
console.log(multiply(4, 5)); // Output: 20

// Function expressions can also be anonymous (no name given to the function)
const divide = function (x, y) {
    return x / y;
};

console.log(divide(10, 2)); // Output: 5