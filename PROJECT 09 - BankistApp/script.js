"use strict";
// Data
const account1 = {
  owner: "Basit Showkat Rather",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Arkam Ajaz",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, //%
  pin: 2222,
};

const account3 = {
  owner: "haseeb Dar",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, //%
  pin: 3333,
};

const account4 = {
  owner: "Taureed Ayub",
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
const calcAndDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, ele) => accum + ele, 0);
  labelBalance.textContent = `${acc.balance}€`;
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
const displayUI = function (acc) {
  //display balance
  calcAndDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);

  //display movements
  displayMovements(acc.movements);
};
const timerFn = function () {
  let second = 60;
  let minute = 4;
  let interval = setInterval(() => {
    second--;
    if (second <= 60) {
      if (second >= 10) {
        labelTimer.textContent = `0${minute}:${second}`;
      }
      if (second < 10) {
        labelTimer.textContent = `0${minute}:0${second}`;
      }
    }
    if (second < 0) {
      second = 59;
      minute--;
      labelTimer.textContent = `0${minute}:${second}`;
    }
    if (second === 0 && minute === 0) {
      clearInterval(interval);
      containerApp.classList.remove("loggedIn");
    }
    btnLogin.addEventListener("click", function () {
      clearInterval(interval);
    });
  }, 1000);
};
const logOut = function () {
  containerApp.classList.remove("loggedIn");
  labelWelcome.textContent = `Enter the right userName and pin`;
};
const loanRequest = function (amount) {
  const depositCheck = currentAccount.movements.some(
    (move) => move >= 0.1 * amount
  );
  if (depositCheck) {
    currentAccount.movements.push(amount);
    displayUI(currentAccount);
  }
};
const sortMovements = function (currentAccount, state) {
  if (state) {
    const tempMov = currentAccount.movements.slice().sort((a, b) => a - b);
    displayMovements(tempMov);
  } else {
    displayMovements(currentAccount.movements);
  }
};
setUserName(accounts);
let currentAccount;
let sortState = false;

//eventlisteners
btnSort.addEventListener("click", function () {
  sortMovements(currentAccount, !sortState);
  sortState = !sortState;
});
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const loanAmount = Number(inputLoanAmount.value);
  loanRequest(loanAmount);
  inputLoanAmount.value = "";
  inputLoanAmount.blur();
});
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.userName === inputLoginUsername.value
  );
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //greeting messeage
    // labelWelcome.style.color = "black";
    labelWelcome.textContent = `Welcome Back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.classList.add("loggedIn");

    //display UI
    displayUI(currentAccount);

    //clear Input fields loose focus
    inputLoginPin.value = inputLoginUsername.value = "";
    inputLoginPin.blur();
    timerFn();
  } else {
    //error messeage
    logOut();
    labelWelcome.classList.toggle("wrongUIDandPIN");
  }
});
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const receiverAcc = accounts.find(
    (acc) => acc.userName === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    //remove and add movements of the transferer and reciver movements
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //displayUI
    displayUI(currentAccount);
  }
  inputTransferTo.value = inputTransferAmount.value = "";
  inputTransferAmount.blur();
});
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("ads");
  if (
    currentAccount.userName == inputCloseUsername.value &&
    currentAccount.pin == inputClosePin.value
  ) {
    //find the index of the current account
    const index = accounts.findIndex(
      (acc) => acc.userName === currentAccount.userName
    );
    // Delete the user
    accounts.splice(index, 1);

    //logout the user from account
    containerApp.classList.remove("loggedIn");
    labelWelcome.textContent = `Log in to get started`;

    //Blank the input Fields
    inputCloseUsername.value = inputClosePin.value = "";
  } else {
    alert("Enter the right userName and Pin");
  }
});
