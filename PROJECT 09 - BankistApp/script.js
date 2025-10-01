"use strict";
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, //%
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, //%
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1, //%
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Here we will write a function to display data of the movements.
const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach((mov, index) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};
const setUserName = function (accs) {
  accs.forEach((ele) => {
    ele.userName = ele.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};
const calcAndDisplayBalance = function (movements) {
  let balance = movements.reduce((accum, ele) => accum + ele, 0);
  labelBalance.textContent = `${balance}€`;
};
const calcDisplaySummary = function (account) {
  // inside came money
  const income = account.movements
    .filter((ele) => ele > 0)
    .reduce((acc, current) => acc + current, 0);
  labelSumIn.textContent = ` ${income}€`;

  //outside went money
  const out = account.movements
    .filter((ele) => ele < 0)
    .reduce((acc, current) => acc + current, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  //the intrest bank will give user
  const intrest = account.movements
    .filter((ele) => ele > 0)
    .map((deposit) => (deposit * account.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((int, current) => int + current, 0);
  labelSumInterest.textContent = `${intrest.toFixed(2)}€`;
};
setUserName(accounts);

let currentAccount;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and greeting messeage
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.classList.add("loggedIn");

    //display balance
    calcAndDisplayBalance(currentAccount.movements);

    //display summary
    calcDisplaySummary(currentAccount);

    //display movements
    displayMovements(currentAccount.movements);

    //clear Input fields loose focus
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();
  } else {
    //error messeage
    containerApp.classList.remove("loggedIn");
    labelWelcome.classList.toggle("wrongUIDandPIN");
    labelWelcome.textContent = `Enter the right userName and pin`;
  }
});
