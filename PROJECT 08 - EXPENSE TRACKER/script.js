"use strict";
const changeModeBtn = document.querySelector(".mode");
const title = document.querySelector("h1");
const label = document.querySelectorAll("label");
const description = document.querySelector("#description");
const amount = document.querySelector("#amount");
const expenseType = document.querySelector("#expenses");
const submitExpenseBtn = document.querySelector(".addExpenseBtn");
const tableBody = document.querySelector("#expense-table-body");
const totalAmount = document.querySelector("#total-amount");
const userInputs = {
  description: "",
  amount: "",
  expenseType: "",
};
let totalSum = 0;

// FUNCTIONS
const toggleMode = function () {
  document.body.classList.toggle("changeBackGroundImage");
  title.classList.toggle("heading");
  label.forEach((element) => {
    element.classList.toggle("label");
  });
};
const createElements = function () {
  const tableRow = document.createElement("tr");
  tableBody.appendChild(tableRow);
  const td1 = document.createElement("td");
  td1.textContent = userInputs.description;
  tableRow.appendChild(td1);
  const td2 = document.createElement("td");
  td2.textContent = userInputs.amount;
  tableRow.appendChild(td2);
  const td3 = document.createElement("td");
  td3.textContent = userInputs.expenseType;
  tableRow.appendChild(td3);
  const td4 = document.createElement("td");
  tableRow.appendChild(td4);
  const delBth = document.createElement("button");
  delBth.textContent = "Delete";
  delBth.classList.add("delete-btn");
  td4.appendChild(delBth);
  totalSum += userInputs.amount;
  totalAmount.textContent = totalSum;
  delBth.addEventListener("click", () => {
    tableRow.remove();
    totalSum -= td2.textContent;
    totalAmount.textContent = totalSum;
  });
};
const getData = function () {
  userInputs.description = description.value;
  userInputs.amount = Number(amount.value);
  userInputs.expenseType = expenseType.value;
  if (userInputs.description === "" || userInputs.amount == "") {
    alert("Enter the description and amount fields");
  } else {
    createElements();
  }
};

//EventListeners

//ToggleModes
submitExpenseBtn.addEventListener("click", () => {
  getData();
});
changeModeBtn.addEventListener("click", () => {
  toggleMode();
});
