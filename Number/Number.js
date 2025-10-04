//Number is a javaScript datatype and we define number by two ways
let x = 10; //Normal way
let y = new Number(50);

// Number is also a built-in object that provides useful constants and methods for working with numbers.

// There are some Common Number Constants
console.log(Number.MAX_VALUE); //Largest possible number
console.log(Number.MIN_VALUE); //smallest possible number
console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.NaN); // Not A Number

//There are some methods which we can perform on a Number Object

console.log(Number.isFinite(value)); //Checks if value is a finite number
console.log(Number.isInteger(value)); //Checks if value is an integer
console.log(Number.isNaN(value)); //Checks if value is NaN
console.log(num.toFixed(digits)); //Rounds number → fixed decimal places (returns string)
