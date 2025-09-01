"use strict";
// declarations of the variables
const bgChange = document.querySelector(".app");
const displayChange = document.querySelector("#display");
const heading = document.querySelector("h1");
const setTimer = document.querySelector("#minutes");
const startTimer = document.querySelector("#start");
const pauseTimer = document.querySelector("#pause");
const resetTimer = document.querySelector("#reset");
const toggleTheme = document.querySelector("#toggle-theme");
let second = 60;
let minute = 25;
let interval;

//functions for the webApp

//This function start's the timer
const start = function () {
  let userValue = Number(setTimer.value);
  minute = userValue - 1;
  interval = setInterval(() => {
    if (minute === -1) {
      pause();
      return;
    }
    if (second <= 60) {
      second--;
      displayChange.textContent = `${minute}:${second}`;
    }
    if (second == 0) {
      minute--;
      second = 60;
    }
  }, 1000);
};
//This function pause's the timer
const pause = function () {
  clearInterval(interval);
};
//This function reset's the timer
const reset = function () {
  minute = Number(setTimer.value);
  second = 0;
  displayChange.textContent = `${minute}:${second}0`;
  second = 60;
  pause();
};
//This function switch between the dark mode and light mode
const changemode = function () {
  bgChange.classList.toggle("bgChange");
  setTimer.classList.toggle("minutesChange");
  displayChange.classList.toggle("displayChange");
  startTimer.classList.toggle("startChange");
  pauseTimer.classList.toggle("pauseChange");
  resetTimer.classList.toggle("resetChange");
  heading.classList.toggle("h1Change");
};

//Event listeners
pauseTimer.addEventListener("click", () => {
  pause();
});
toggleTheme.addEventListener("click", () => {
  changemode();
});
resetTimer.addEventListener("click", function () {
  reset();
});
startTimer.addEventListener("click", () => {
  start();
});
