"use strict";
// || OR operator
// Operator work on any data type, return any data type, and support short-circuiting.
// Short-circuiting happens when the operator stops checking once it finds a true value.
// Example
console.log(1 || "basit"); //1 :because the 1 is true stop it will stop looking for other true values
console.log("" || null); // null Because it’s the first truthy value.
console.log(0 || undefined || 0 || 99 || "basit" || 11); //99Because it’s the first truthy value.

// && AND OPERATOR
// && operator checks if all the values are true if it finds one falsy value it returns falsy value
console.log("shjdb" && 0); //0 because falsy
console.log("nasd" && 22 && undefined); //undefined because falsy

// ?? nulish Operator : it works almost the same as OR but it accepts the 0 or "" as truthy value but dont accept null and undefined

console.log("" ?? undefined); // it will empty string because it recognise it as truthy
console.log(undefined ?? 87); // 87

//logical assigment operators
// it is used to assign the value to the varibale if the current value is truthy
// example
const arr = [undefined, 4, 9, 7];

// OR assigment Operator
console.log((arr[2] ||= 99)); //9 because it stopped because the value of arr[2] is true

// AND assignment Operator
console.log((arr[3] &&= 99)); //99 because the arr[3] is a truthy value

// NULLISH assignment Operator
console.log((arr[0] ??= 88)); //88 because arr[0] is a truthy value if it was other than undefined and null the log will have been that varibale because to ??
