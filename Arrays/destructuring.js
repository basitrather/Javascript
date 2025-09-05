"use strict";
// It’s a JavaScript shortcut to extract array values and assign them to variables in one line.

const credentials = ["basit", "Showkat", "Rather"];
let [firstName, middleName, lastName] = credentials; //Destructuring Array
console.log(`The user fullname is ${firstName} ${middleName} ${lastName}`);
// We assign array values to variables for easy use.Destructuring makes this assignment short, clean, and readable.

// swicthing variables
[firstName, lastName] = [lastName, firstName]; //firstName = lastName and LastName = firstName
console.log(firstName, lastName);

// Example
// Write a function getUser() that returns an array containing a user’s name, age, and city
const getUser = function () {
  const Name = "basit";
  const age = 25;
  const city = "srinagar";
  return [Name, age, city]; //recieving multiple values from an array
};
const [userId, userAge, userCity] = getUser();
console.log(
  `The userName is ${userId}, Age of the user is ${userAge} and the city user lives in is ${userCity}`
);

// destructing nested arrays
const nested = [2, 6, [4, 8, 5]];
let [a, b, [c, , d]] = nested; // Here, we assigned variables to all nested array values except 8
[c, , d] = [d, , c]; //Swapped nested array values
console.log(a, b, c, d);

//We can set default values when destructuring arrays.
const arr = [4, 5, 6];
const [x, y, z = 1, i = 1, j = 9] = arr;
console.log(x, y, z, i, j);
