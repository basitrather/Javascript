"use strict";
//rest operator (...)
// Used on the left side of = during destructuring to collect the “rest” of the values into an array.
//Note: ...rest packs and ...spread unpacks
// Example:
const arr = [1, 4, 5, 76];
const [a, b, ...others] = arr;
console.log(a, b, others); //1 4 [5, 76] Here, 5 and 7 are collected into the array others.

//Using rest in functions to handle an unknown number of parameters
const getUserIds = function (...users) {
  users.forEach((element) => {
    console.log(element);
  });
}; // Here we handle a limited unknown number of arguments from the user.Itterate over them with forEach

getUserIds(2, 4, 6, 78, 89, 900, 45); // These values are packed into an array by the rest operator when passed as arguments to the function.
const newArr = [22, 2, 3, 12];
getUserIds(...newArr); // Here we unpack values with the spread operator, pass them to a function, and inside the function they get repacked by the rest operator.
