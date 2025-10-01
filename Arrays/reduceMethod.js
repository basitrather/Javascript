// The reduce() method in JavaScript is used to reduce an array to a single value by applying a function to each element, one after another, while carrying forward an “accumulator”.

//Example : we want to add all the numbers of an array into a variable
const numbers = [2, 34, 99, 33, 34, 5, 68, 83, 35, 3];
const totalBalance = numbers.reduce(function (accumilator, num) {
  return accumilator + num;
}, 0);
console.log(totalBalance);

let sum = 0;
for (const element of numbers) {
  sum += element;
}
console.log(sum);
