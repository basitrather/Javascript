// Define an array with items.
const arrayName = ['item1', 'item2', 'item3', 'item4', 'item5'];

// Create a new array using the 'new' keyword.
const newArray = new Array('item1', 'item2', 'item3');

// Print the entire array.
console.log(arrayName);

// Print the fourth item (index 3).
console.log(arrayName[3]);

//we can also do expressions and array in array in an array
const newArray01 =['firstName','lastName', 2024 -199, arrayName];


// Using Functions with Arrays

// Function to calculate age based on a given birth year
const calAge = function (birthYear) { 
    return 2024 - birthYear;
};

// Array holding birth years
const dob = [1999, 2000, 1987, 1966];

// Create a new array to store ages by calling the function on specific indices of the 'dob' array
const age = [calAge(dob[1]), calAge(dob[2]), calAge(dob[dob.length - 1])];

// Print the 'age' array containing calculated ages
console.log(age);