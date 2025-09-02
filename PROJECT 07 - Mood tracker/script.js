"use strict";
const moodBtn = document.querySelectorAll(".mood");
const saveMoodBtn = document.querySelector(".submit");
const tableBody = document.querySelector("#history-body");
const today = new Date();
const formattedDate = today.toISOString().split("T")[0];
let currentMood;

//functions
const addData = function () {
  const row = document.createElement("tr");
  tableBody.appendChild(row);
  const date = document.createElement("td");
  date.textContent = formattedDate;
  row.appendChild(date);
  const tableData = document.createElement("td");
  tableData.textContent = currentMood;
  row.appendChild(tableData);
};

//event listeners
moodBtn.forEach((mood) => {
  mood.addEventListener("click", function () {
    currentMood = mood.textContent;
    moodBtn.forEach((btn) => btn.classList.remove("moodSelected"));
    mood.classList.add("moodSelected");
  });
});

saveMoodBtn.addEventListener("click", function () {
  addData();
});
