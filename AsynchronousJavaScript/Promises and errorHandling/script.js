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

// Creating a Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  // Executor runs immediately when Promise is created
  console.log("Lottery draw started");

  // Simulate async work (e.g. API, timer, task)
  setTimeout(function () {
    // Resolve = success, Reject = failure
    if (Math.random() >= 0.5) resolve("Congrats you won");
    else reject(new Error("Sorry you lost lottery"));
  }, 3000);
});

// Consume the Promise
lotteryPromise
  .then((response) => {
    // Runs when resolve() is called
    console.log(response);
  })
  .catch((err) => {
    // Runs when reject() is called
    console.error(err);
  });

// Promisifying an async task (image loading)
function loadImage(src) {
  return new Promise((resolve, reject) => {
    // Create image element
    const img = document.createElement("img");
    img.src = src;

    // Resolve when image loads successfully
    img.onload = () => resolve(img);

    // Reject when image fails to load
    img.onerror = () => reject(new Error("Failed to load img"));
  });
}

// Consume the Promise
loadImage("./photo.jpg")
  .then((img) => {
    // Runs on successful load
    console.log(img);
  })
  .catch((err) => {
    // Runs if loading fails
    console.error(err);
  });
