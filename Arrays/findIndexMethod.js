// FindIndexMethod:returns the index of the first element that matches a given condition (test function).
// If no element matches, it returns -1.

// syntax
// array.findIndex(callback(element, index, array), thisArg)
const arr = [3, 89, 67, 89, 0]; // suppose we have to find the index of the 89
const ind = arr.findIndex((arr) => arr === 89); // returns the index at which the 89 was first found
console.log(ind); //1
