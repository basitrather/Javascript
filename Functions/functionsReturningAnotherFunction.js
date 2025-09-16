"use strict";
//In javascript we can also return a function from a function;

//Example;
const greet = (greeting) => {
  //here we are creating a function
  return (name) => {
    // the function returns another function
    console.log(`${greeting} ${name}`);
  };
};
const heyGreeter = greet("Hey"); // we call the greet function send an argument for the (greeting) i.e a local variable and store the returned function inside a variable.
heyGreeter("Basit"); // Then we call the stored function and pass on the argument for the function that was returned and the function gets excuted:)

/*
Q: we passed only one argument to heyGreater function then how 
 did the greeting variable got logged?
A: its because of the closure function behaviour, when the
 greet function was executed the returned function remembered
 the greeting value, so any time we call the returned function
 it has access to the outer function variable
*/
