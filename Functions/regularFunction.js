// Regular functions are declared using the 'function' keyword

function greet(name) {
    return `Hello, ${name}!`; // Returns a greeting message
}

// Calling the function
let message = greet("Basit");
console.log(message); // Output: Hello, Basit!

// Regular functions can also have default parameters
function add(a, b = 0) { // Default value for 'b' is 0
    return a + b;
}

console.log(add(5)); // Output: 5 (5 + 0)
console.log(add(5, 3)); // Output: 8 (5 + 3)