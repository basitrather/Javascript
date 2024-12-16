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

// EXERCISE WITH ARRAYS 
// Function to calculate the tip based on the bill value
const calcTip = function (bill) {
    // If the bill is between 50 and 300, apply a 15% tip
    if (bill >= 50 && bill <= 300)  
      bill = bill * 0.15;
    // Otherwise, apply a 20% tip
    else    
      bill = bill * 0.20;
    
    // Return the calculated tip
    return bill;
  };
  
  // Array holding different bill values
  const bills = [125, 555, 44];
  
  // Calculate the tips for each bill and store them in an array
  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
  
  // Calculate the total amount (bill + tip) for each value and store in an array
  const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
  
  // Log the calculated tips to the console
  console.log(tips);
  
  // Log the total amounts (bill + tip) to the console
  console.log(totals);