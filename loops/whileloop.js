//the while loop syntax
let i=1;
while(i<10){
console.log(`statement ${i}`);
i++;
}
// definitionIt's often used when the number of iterations is not known ahead of time and depends on a condition that changes dynamically.

//To understand the while loop better here is the a an example where the itterations are unknown.
// Rolling a dice until the number 6 is rolled

// Generate a random number between 1 and 6 (inclusive)
let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice);

// Continue rolling the dice until we get 6
while (dice !== 6) {
    console.log(dice);
    
    // Generate a new random number between 1 and 6
    dice = Math.trunc(Math.random() * 6 + 1);
}

// Explanation of the methods used:
// Math.random() generates a random decimal between 0 and 1.
// Multiplying by 6 gives a range from 0 to just under 6 (i.e., 0 to 5.999...).
// Adding 1 shifts the range to 1 to just under 7 (i.e., 1 to 6.999...).
// Math.trunc() removes the decimal part, returning an integer between 1 and 6.
