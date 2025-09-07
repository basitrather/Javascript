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
