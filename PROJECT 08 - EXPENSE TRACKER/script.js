"use strict";
//declearing variable
const changeModeBtn = document.querySelector(".mode");
const title = document.querySelector("h1");
const label = document.querySelectorAll("label");
const description = document.querySelector("#description");
const amount = document.querySelector("#amount");
const expenseType = document.querySelector("#expenses");
const submitExpenseBtn = document.querySelector(".addExpenseBtn");
const tableBody = document.querySelector("#expense-table-body");
const totalAmount = document.querySelector("#total-amount");
const tableHeading = document.querySelectorAll("th");
const userInputs = {
  description: "",
  amount: "",
  expenseType: "",
};
let totalSum = 0;

// FUNCTIONS
//deleteItem function
const deleteItem = function () {};
// Create expense table on the DOM
const createElements = function (object) {
  const tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow);
  const td1 = document.createElement("td");
  td1.textContent = object.description;
  tableRow.appendChild(td1);
  const td2 = document.createElement("td");
  td2.textContent = object.amount;
  tableRow.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = object.expenseType;
  tableRow.appendChild(td3);
  const td4 = document.createElement("td");
  tableRow.appendChild(td4);
  const delBth = document.createElement("button");
  delBth.textContent = "Delete";
  delBth.classList.add("delete-btn");
  td4.appendChild(delBth);
  totalSum += object.amount;
  totalAmount.textContent = totalSum;
  delBth.addEventListener("click", () => {
    tableRow.remove();
    totalSum -= td2.textContent;
    totalAmount.textContent = totalSum;
    let objectArray = JSON.parse(localStorage.getItem("userData"));
    objectArray = objectArray.filter(
      (item) =>
        !(
          item.description === object.description &&
          item.amount === object.amount &&
          item.expenseType === object.expenseType
        )
    );
    localStorage.setItem("userData", JSON.stringify(objectArray));
  });
};
//display the saved data
const displayData = function () {
  let objectArray = JSON.parse(localStorage.getItem("userData")) || [];
  objectArray.forEach((element) => {
    createElements(element);
  });
};
//saving data in local storage
const saveData = function () {
  let userDataArray = JSON.parse(localStorage.getItem("userData")) || [];
  userDataArray.push(userInputs);
  localStorage.setItem("userData", JSON.stringify(userDataArray));
};

const getData = function () {
  userInputs.description = description.value;
  userInputs.amount = Number(amount.value);
  userInputs.expenseType = expenseType.value;
  if (userInputs.description === "" || userInputs.amount == "") {
    alert("Enter the description and amount fields");
  } else {
    createElements(userInputs);
  }
  saveData();
};

submitExpenseBtn.addEventListener("click", () => {
  getData();
});

displayData();

const toggleThemeAutomatically = function () {
  const tableData = document.querySelectorAll("td");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.toggle("changeBackGroundImage");
    title.classList.toggle("heading");
    label.forEach((element) => {
      element.classList.toggle("label");
    });
    tableHeading.forEach((element) => {
      element.classList.toggle("borderStyling");
    });
    tableData.forEach((element) => {
      element.classList.toggle("borderStyling");
    });
  }
};
toggleThemeAutomatically();
