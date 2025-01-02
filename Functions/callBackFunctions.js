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

// I understood that callbacks are important when I need to delegate a task to another function and continue with
// the rest of the code without waiting for the task to complete. 
// - For example, I used callback functions in the `forEach` method to process array elements one by one.
// - The callback function can help me handle asynchronous operations (like reading files, making API calls, etc.).

// When I used a callback in my learning:
// - I realized that callbacks allow me to run code only when the previous operation finishes, and they don’t 
// block the rest of my code from running.
// - I also saw that callbacks can be used in both synchronous and asynchronous contexts.