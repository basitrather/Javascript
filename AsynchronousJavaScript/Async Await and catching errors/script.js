"use strict";
//Using the old legacy way of using promises
fetch("https://restcountries.com/v3.1/name/usa")
  .then((response) => {
    if (!response.ok) {
      throw new Error("No country found");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].region);
    console.log(Object.values(data[0].languages)[0]);
  })
  .catch((err) => console.error(err));

//
// async function always returns a Promise
const getCountryDetails = async function () {
  // try is used to wrap code that might fail, so errors can be caught and handled instead of crashing the program.
  try {
    // await pauses execution until Promise resolves
    const response = await fetch("https://restcountries.com/v3.1/name/usa");

    // throw creates a rejected Promise manually
    if (!response.ok) throw new Error("No country found, Try again");

    // await waits for JSON parsing to finish
    const responseJSON = await response.json();

    // normal synchronous code after await
    console.log(responseJSON[0].region);
    console.log(Object.values(responseJSON[0].languages)[0]);
  } catch (err) {
    // catch handles any rejected Promise or thrown error
    console.error(err);
  }
};

// calling the async function
getCountryDetails();
