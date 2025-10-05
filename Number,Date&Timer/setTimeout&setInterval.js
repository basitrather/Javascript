// setTimeout Runs a function once after a given delay (in milliseconds).
// setTimeout(callback, delay, arg1, arg2, arg3); // Syntax
setTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000);
// Note: when the js reaches the timeout() it calls it and registers the
// timeout() to be called after the time passes and then js moves to nextline

// There is a way to pass the arguments to setTimeout after the delay
// Example

const timer = setTimeout(
  (arg1, arg2) => console.log(`Here are the arguments : ${arg1} , ${arg2}`),
  2000,
  "i am argument 1",
  "i am argument 2"
);

//we can delete the timeout before it begans
clearTimeout(timer); //pass the timer variable as argument

//setInterval:Repeats a function every given delay (in milliseconds).
// setInterval(callback, delay);
// setInterval(() => {
//   console.log("Repeating every 1 second!");
// }, 1000);
// We can also clear the interval on the basis of some condition or directly

// Making a clock using setInterval
const clockText = document.querySelector("#time");
const clock = setInterval(() => {
  const date = new Date();
  const hours = `${date.getHours()}`.padStart(2, 0);
  const minutes = `${date.getMinutes()}`.padStart(2, 0);
  const seconds = `${date.getSeconds()}`.padStart(2, 0);
  console.log(hours, minutes, seconds);
  clockText.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000);
