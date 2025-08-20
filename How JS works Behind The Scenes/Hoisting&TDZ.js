// hoisting means lifting up the variables and functions to the top of there scope( {} Scope)
// behind the scenes there is something different happening, Whenever we declere a variable before the excution code is scanned and each varibale a different property is created  in the varibale envieroment object

// hoisting works with the function declerations, Example:
greet("Aadil"); //Will be excuted

function greet(name) {
  return `Hello, ${name}!`;
}

// with var it also works but it returns or gives output as undefined, It is basically a bug in Js
// with let const it doesn't work at all it throws an error
// with function expression and arrow function it depends on where the fn is stored, In var it throws an error message that the variable is not a function, and with let and const it throws an error

// TDZ is temporal dead zone, it is basically the place in the block which is before the varibale is created. Example
let a = 10; // Temporal Dead Zone
let b = 20; // Temporal Dead Zone
console.log(a + b + c); // Temporal Dead Zone
console.log("this is the sum of the two number"); // Temporal Dead Zone
let c = 10;
