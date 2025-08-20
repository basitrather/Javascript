"use strict";
// Scope = The area where a variable is accessible (visible)\

// variable scope
// let and const are limited to the specific block of code they're in (like a loop or an if statement), while var is limited to the function it's in or becomes a global variable.

let firstName = "Basit"; // Global scope
function greet() {
  console.log("Hello " + firstName); // ✅ Can access
}
greet();
console.log(firstName); // ✅ Can access

// Lexical scope means that a function can access variables from the scope it was defined in, including its parent functions. However, an outer function can't access variables that are defined inside a function nested within it.

// Example of inner function trying to access the outer function varibale
function outer() {
  let outerVar = "I am from outer";

  function inner() {
    console.log(outerVar); // ✅ Allowed
  }
  inner();
}
outer();

// Example of outer function trying to access the inner function varibale
function outer() {
  function inner() {
    let innerVar = "I am from inner";
    console.log(innerVar); // ✅ Works here
  }

  inner();

  console.log(innerVar); // ❌ Error: innerVar is not defined
}
outer();

// while using strict mode the Function() becomes block scoped
