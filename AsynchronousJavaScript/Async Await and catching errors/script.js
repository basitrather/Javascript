"use strict";
//Using the old legacy way of using promises
fetch("https://restcountries.com/v3.1/name/germany")
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
    const response = await fetch(
      "https://restcountries.com/v3.1/name/australia",
    );

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

const getJson = function (URL) {
  return fetch(URL).then((response) => response.json());
};
// ================== Promise.all ==================
// Waits for ALL promises to fulfill
// If ANY promise rejects → whole thing rejects immediately
// Returns an array of resolved values (in order)
// Use when: you NEED all results, and one failure should stop everything

const getCountryNameAll = async function () {
  try {
    // Run all fetch requests in parallel
    const allNames = await Promise.all([
      getJson("https://restcountries.com/v3.1/name/australia"),
      getJson("https://restcountries.com/v3.1/name/usa"),
      getJson("https://restcountries.com/v3.1/name/germany"),
    ]);
    // Extract country names from each response
    console.log(allNames.map((e) => Object.values(e[0].name)[0]));
  } catch (err) {
    // Runs if ANY promise fails
    console.error(err);
  }
};
getCountryNameAll();

// ================== Promise.race ==================
// Returns the FIRST settled promise (resolve OR reject)
// Ignores the rest once one finishes
// Use when: you want the fastest result (timeout, fastest API)
const getCountryNameRace = async function () {
  try {
    // Promise.race resolves/rejects with the FIRST settled promise
    const winner = await Promise.race([
      getJson("https://restcountries.com/v3.1/name/australia"),
      getJson("https://restcountries.com/v3.1/name/usa"),
      getJson("https://restcountries.com/v3.1/name/germany"),
    ]);
    // Extract country name from the fastest response
    console.log(Object.values(winner[0].name)[0]);
  } catch (err) {
    // Runs if the first settled promise is a rejection
    console.error(err);
  }
};
getCountryNameRace();

// ================== Promise.allSettled ==================
// Waits for ALL promises to settle (fulfilled OR rejected)
// NEVER rejects
// Returns array of objects with status + value/reason
// Use when: you want results of ALL promises, even failures
const getCountryNameAllSettled = async function () {
  try {
    // Promise.allSettled waits for ALL promises to settle
    const results = await Promise.allSettled([
      getJson("https://restcountries.com/v3.1/name/australia"),
      getJson("https://restcountries.com/v3.1/name/usa"),
      getJson("https://restcountries.com/v3.1/name/germany"),
    ]);
    // Handle only successful responses
    const countryNames = results
      .filter((res) => res.status === "fulfilled")
      .map((res) => Object.values(res.value[0].name)[0]);

    console.log(countryNames);
  } catch (err) {
    // This usually won't run (allSettled never rejects)
    console.error(err);
  }
};
getCountryNameAllSettled();

// ================== Promise.any ==================
// Returns the FIRST fulfilled promise
// Ignores rejected ones
// Rejects ONLY if ALL promises reject
// Use when: you want at least ONE success (fallback APIs)
const getCountryNameAny = async function () {
  try {
    // Promise.any resolves with the FIRST successful promise
    const result = await Promise.any([
      getJson("https://restcountries.com/v3.1/name/australia"),
      getJson("https://restcountries.com/v3.1/name/usa"),
      getJson("https://restcountries.com/v3.1/name/germany"),
    ]);
    // Extract country name
    console.log(Object.values(result[0].name)[0]);
  } catch (err) {
    // Runs only if ALL promises fail
    console.error(err);
  }
};
getCountryNameAny();
