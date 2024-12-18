// A 'for' loop is used to run a block of code multiple times.

// i = 0: Starting value of the loop counter.
// i < 10: The loop continues as long as this condition is true.
// i++: Increases 'i' by 1 after each loop iteration.
for (i = 0; i < 10; i++) {
    // This block of code runs in each loop iteration.
    console.log(`statement${i}`); // Prints 'statement' followed by the current value of 'i'.
};

// Looping through an array using a 'for' loop
// Object (array) containing different types of data
const information = ['basit', 'showkat', 23, 'student'];
for (let i = 0; i < information.length; i++) {
    // Prints each element of the array one by one
    console.log(information[i]);
};

// Calculating age from birth years and storing it in a new array
const age = []; // New array to store calculated ages
const dob = [1999, 1987, 2001, 2003]; // Array of birth years
for (let i = 0; i < dob.length; i++) {
    // Calculates age by subtracting the birth year from 2024 and adds it to the 'age' array
    age.push(2024 - dob[i]);
};
console.log(age); // Prints the array of calculated ages

// Using 'continue' and 'break' statements in a loop
// Array with mixed data types
const info = ['basit', 'showkat', 23, 'student'];
for (let i = 0; i < info.length; i++) {
    if (typeof info[i] !== 'string') continue; // Skips the iteration if the element is not a string
    if (info[i] === 'showkat') break; // Exits the loop if the element is 'showkat'
    console.log(info[i]); // Prints the element if neither 'continue' nor 'break' is triggered
};

// Definition of 'break' and 'continue':
// 'break': Stops the loop completely when the condition is met.
// 'continue': Skips the current iteration and moves to the next one.


//backward looping

// Initialize an array of prime numbers
const primeNumber = [2, 3, 5, 7, 11, 13];

// Create an empty array to store the reversed prime numbers
const backward = [];

// Start the loop from the last index of the primeNumber array
// The loop will continue as long as i is greater than or equal to 0
// This allows the loop to go through the array in reverse order
for (let i = primeNumber.length - 1; i >= 0; i--) {
    // Push each element from primeNumber array to the backward array
    backward.push(primeNumber[i]);
}

// Log the reversed backward array to the console
console.log(backward);

// Function to generate a weather forecast string from an array
const printForcast = function (arr) {
    let str = ''; // Initialize an empty string to store the forecast
    for (let i = 0; i < arr.length; i++) {
        // Append each temperature and day information to the string
        str += `...${arr[i]}C in ${i + 1} days`;
    }
    return str; // Return the complete forecast string
};

// Example array of temperatures
const arr = [17, 21, 23];

// Log the forecast string to the console
console.log(printForcast(arr));
