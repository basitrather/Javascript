// MAP METHOD

// `map()` creates a new array by applying a function to each element of the original array.
// It does not modify the original array and always returns a new array.
// The callback function is called for each element.

// Example 1: Doubling the numbers
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]

// Example 2: Multiplying numbers by a factor
const numbersArray = [1, 2, 3];
const multiplyBy = 3;
const result = numbersArray.map((num) => num * multiplyBy);
console.log(result); // Output: [3, 6, 9]

//Example 3: conversion of Euro to the USD
const euros = [33, 45, 57, 89, 90, 66];
const eurToUsd = 1.1;
//now without mutating it we will use map method to create a new array with the USD converted Rated
const convertedToUsd = euros.map((currency) => currency * eurToUsd); // here we ran the map method on the euros array and passed on a function and it returned a new array with converted values
console.log(convertedToUsd);
