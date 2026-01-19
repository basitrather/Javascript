"use strict";

// Fetch country data using Promises (no callback hell)
const getCountryData = function (countryName) {
  // First API request
  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((responseFromAPI) => {
      // Check if the HTTP request failed (404, 500, etc.)
      if (!responseFromAPI.ok) {
        // Manually reject the Promise so it goes to .catch()
        throw new Error(`Country not found (${responseFromAPI.status})`);
      }
      return responseFromAPI.json();
    })
    .then((actualData) => {
      // actualData is an array → spread to log the country object
      console.log(...actualData);

      // Get first neighbouring country code (if exists)
      const adjacentData = actualData[0].borders?.[0];
      if (!adjacentData) return;

      // Return fetch so the next .then waits for it
      return fetch(`https://restcountries.com/v3.1/name/${adjacentData}`);
    })
    .then((responseFromAPI) => {
      // Convert neighbour response to JSON
      return responseFromAPI.json();
    })
    .then((data) => {
      // Log neighbouring country data
      console.log(data[0]);
    })
    // Handles any error thrown in the Promise chain
    .catch((error) => console.error(error.message))

    // Runs always — success or failure
    .finally(() => {
      console.log("Fetch Completed");
    });
};

// Start the request chain
document.querySelector(".child").addEventListener("click", function () {
  getCountryData("usa");
});
