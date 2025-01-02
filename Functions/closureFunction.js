/*
   A closure is a function that has access to variables from its outer function, 
   even after the outer function has finished executing. This allows the inner 
   function to "remember" its environment and maintain state across calls.
*/

// **Example of Closure:**
function outer() {
    let count = 0; // Outer function variable
    
    // Inner function (Closure)
    function inner() {
        count++; // Accessing the 'count' from the outer function
        console.log(count); // Logging the updated count
    }

    return inner; // Returning the inner function
}

const counter = outer(); // outer() returns the inner function
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

/*
    - outer() finishes executing, but the inner() function still has access 
    to 'count' because it remembers its lexical scope (Closure).
*/

// **How I Understood Closures:**
/*
   1. A closure is an inner function that has access to variables from its outer function.
   2. Even if the outer function finishes execution, the inner function can still access 
      the outer function's variables.
   3. Closures are useful for maintaining state and creating private data.
*/