"use strict";
const moodBtns = document.querySelectorAll(".mood");
const saveMoodBtn = document.querySelector(".submit");
const tableBody = document.querySelector("#history-body");
let formattedDate = new Date().toISOString().split("T")[0];
let dateArray = [];
let currentMood = [];
let tempMode;

//functions
const displayData = function (currentMood, formattedDate) {
  const row = document.createElement("tr");
  tableBody.appendChild(row);
  const date = document.createElement("td");
  date.textContent = formattedDate;
  row.appendChild(date);
  const tableData = document.createElement("td");
  tableData.textContent = currentMood;
  row.appendChild(tableData);
};
const addData = function () {
  currentMood.push(tempMode);
  dateArray.push(formattedDate);
  displayData(currentMood.at(-1), dateArray.at(-1));
  storeData();
};

const storeData = function () {
  let storeddata = [dateArray, currentMood];
  localStorage.setItem("moodHistory", JSON.stringify(storeddata));
};

//event listeners
moodBtns.forEach((ele) => {
  ele.addEventListener("click", function () {
    tempMode = ele.textContent.trim();
    moodBtns.forEach((btn) => btn.classList.remove("moodSelected"));
    ele.classList.add("moodSelected");
  });
});

saveMoodBtn.addEventListener("click", function () {
  addData();
});

//retrive data from local storage

let getData = localStorage.getItem("moodHistory");
let parsedData = JSON.parse(getData);
console.log(parsedData);
currentMood = parsedData[1];
dateArray = parsedData[0];

currentMood.forEach((_, i) => {
  displayData(currentMood[i], dateArray[i]);
});
