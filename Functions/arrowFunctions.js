// Arrow functions are a shorter way to write functions, introduced in ES6

// Regular function
const add = function (a, b) {
    return a + b;
};

// Arrow function (shorter version)
const addArrow = (a, b) => a + b;

console.log(add(3, 4)); // Output: 7
console.log(addArrow(3, 4)); // Output: 7

// Single parameter does not need parentheses
const greet = name => `Hello, ${name}!`;

console.log(greet("Basit")); // Output: Hello, Basit!

// No parameters requires empty parentheses
const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!