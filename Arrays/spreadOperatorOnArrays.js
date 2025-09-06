"use strict";
// Spread Operator: The spread operator (...) takes an array or object and expands it into individual items, so you can use them separately.

// Implimentations
const arr = [1, 4];

//Creating a new array without spread operator and manually adding arr values.
const badArr = [2, 3, 5, arr[0], arr[1]]; //Not very clean, and harder if the source array has many elements.
console.log(badArr);

//Creating a new array with spread operator.
const goodArr = [3, 4, 6, ...arr]; //Much cleaner, automatically copies all elements from arr, even thousands.
console.log(goodArr); //3, 4, 6, 1, 4

//copy array
const shallowCopy = [...goodArr]; // here we are copying the goodArr into a new array called shallowCopy
console.log(shallowCopy); //3, 4, 6, 1, 4

//joining mutiple arrays
const fullArray = [...arr, ...badArr, ...goodArr, ...shallowCopy]; // copied all the arrays in one single array with spread operator
console.log(fullArray); //[1, 4, 2, 3, 5, 1, 4, 3, 4, 6, 1, 4, 3, 4, 6, 1, 4]

//iterables: arrays,strings,maps,sets.Not objects
//so we can use spread operator on everything⬆️ but not on objects

//Example: unboxing all the elements of a string
const str = "Basit";
const spreadStr = [...str];
console.log(spreadStr); //['B', 'a', 's', 'i', 't'] Now all letters are individually placed in an array.

// A function that accepts mutiple arguments and then use  spread operator to pass on those arguments
const fulName = function (fName, mName, lName) {
  console.log(`Your full name is ${fName} ${mName} ${lName}`);
};

let details = [prompt("firstName"), prompt("middleName"), prompt("lastName")]; // it will return an array;
fulName(...details); //this will unpack the array elements individuly and sent them as seperate arguments to the fullName function
