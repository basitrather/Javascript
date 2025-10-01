"use strict";
//The filter() method in JavaScript is used to create a new array containing only the elements that pass a given test (a condition inside the callback)
//syntax
// const newArray = array.filter(function (element, index, array) {
//   // return true to keep the element, false to remove it
// });

//Example: we want to only filter out the even numbers from the array to another array
const number = [56, 666, 789, 9, 9, 3, 1, 11, 3, 44, 6];
const evenNumber = number.filter((ele) => ele % 2 === 0);
console.log(evenNumber);
