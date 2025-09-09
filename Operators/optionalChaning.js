"use strict";
/* optional Chaning:It lets you safely access deeply nested properties of an object without throwing an error if something is null or undefined.
 */
//  Example 01
const user = {
  name: "Hash",
  address: { city: "Rio" },
};
console.log(user?.name); //Basit: Here ? will check if user object exists or not then it will look for the name property
console.log(user?.contact?.phoneNumber); // Undefined: because it will check first user exists then it went looking for contact property because it didnt exist it didnt move forward it returned undefined rather than an errror

//Example 02
const user02 = {
  id: 101,
  name: "Basit",
  contact: {
    email: "basit@example.com",
  },
};
/*
Use optional chaining to safely access `user02.contact.phone`; if missing, show "Phone not available".
Use optional chaining to call `user02.getDetails()`; if missing, show "No details available".
*/
user02.contact?.phone || console.log("Phone not available");
user02.getDetails?.() || console.log("No details available"); //To check if a function exists, we do it like this.

// we can also use the optional chaning with the arrays

// Example 03
const arr1 = [99, 747, 34737, 22]; // Here we have 4 Index's
console.log(arr1?.[4]); //Undefined : here it is trying to check the 4th index that is not present
