"use strict";

// Function to fetch and display country data
const getCountryData = function (countryName) {
  // Select required DOM elements
  const btn = document.querySelector(".btn-country"); // (not used yet)
  const countriesContainer = document.querySelector(".countries");

  // Create an XMLHttpRequest object
  const request = new XMLHttpRequest();

  // Configure the request (GET data for a country by name)
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);

  // Send the request to the API
  request.send();

  // This runs AFTER the response is fully received
  request.addEventListener("load", function () {
    // Convert JSON string response into JS object
    // API returns an array → we take the first country
    const [data] = JSON.parse(this.responseText);

    // Create HTML markup using received data
    const populationData = `
      <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>

          <!-- Population converted to millions -->
          <p class="country__row">
            <span>👫</span>${(+data.population / 1_000_000).toFixed(1)}
          </p>

          <!-- Language -->
          <p class="country__row">
            <span>🗣️</span>${Object.values(data.languages)[0]}
          </p>

          <!-- Currency -->
          <p class="country__row">
            <span>💰</span>${Object.values(data.currencies)[0].name}
          </p>
        </div>
      </article>
    `;

    // Insert country HTML into the container
    countriesContainer.insertAdjacentHTML("beforeend", populationData);

    // Make container visible
    countriesContainer.style.opacity = "1";
  });
};

// Calling the function for different countries
getCountryData("usa");
getCountryData("Portugal");
getCountryData("brazil");
