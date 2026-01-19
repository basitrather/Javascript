"use strict";

// DOM elements
const btn = document.querySelector(".btn-country"); // not used yet
const countriesContainer = document.querySelector(".countries");

// Renders country data into the DOM (UI only)
const renderCountry = function (data, className = "") {
  const populationData = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.svg}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>

        <p class="country__row">
          <span>👫</span>${(+data.population / 1_000_000).toFixed(1)}
        </p>

        <p class="country__row">
          <span>🗣️</span>${Object.values(data.languages)[0]}
        </p>

        <p class="country__row">
          <span>💰</span>${Object.values(data.currencies)[0].name}
        </p>
      </div>
    </article>
  `;

  // Insert HTML string into DOM
  countriesContainer.insertAdjacentHTML("beforeend", populationData);
  countriesContainer.style.opacity = "1";
};

// Creates and sends an API request, then returns it
const requestAPI = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  return request; // needed to attach load callback later
};

const getCountryData = function (countryName) {
  // First API request
  const apiReceived = requestAPI(countryName);
  console.log(apiReceived);
  apiReceived.addEventListener("load", function () {
    // Response arrives here
    const [data] = JSON.parse(this.responseText);

    // Render main country
    renderCountry(data);

    // Neighbour country code (if exists)
    const neighbouringCountry = data.borders?.[0];

    // Second API request (depends on first one)
    const neighbourApi = requestAPI(neighbouringCountry);

    neighbourApi.addEventListener("load", function () {
      const [neighbourData] = JSON.parse(this.responseText);

      // Render neighbour country
      renderCountry(neighbourData, "neighbour");
    });
  });
};

// Start the process
getCountryData("usa");
