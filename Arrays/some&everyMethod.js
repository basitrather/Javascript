// .some() checks if at least one element in the array satisfies the given condition (callback).
const arr = [-865, 45, -88, 94];
const bigNumber = arr.some(function (ele) {
  return ele > 90; //true: as arr contains a number bigger than 90
});
console.log(bigNumber); //true

// every() checks if all elements in the array satisfy the given condition.
const checkPostiveNumber = arr.every((ele) => ele > 0); // False: because there are some elements which are less than 0 or negative
console.log(checkPostiveNumber);
