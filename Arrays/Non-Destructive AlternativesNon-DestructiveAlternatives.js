// When using the Sort,reverse and splice method on array
// It mutates the original array which is a problem sometimes
// Modern js has alternatives for it toReversed, toSorted & toSpliced methods
// These methods doesn't mutate the orignal array rather returns new array

// Example
const arr = [4, 5, 6, 7, 1, 2, 3, 9, 8, 10];
const reverseArr = arr.toSorted(); //This sorts the array without mutating orginal array
console.log(reverseArr);
console.log(arr);

// Same goes with the reverse and splice
