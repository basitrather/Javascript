/*
🆕 What is Object.groupBy?
It’s a new JavaScript method (ES2024) that helps group items of an array into an object based on a rule user define.
Think of it as: Take this list, group similar things together, and put them in a box with labels.
*/
// Syntax
// Object.groupBy(array, callback);
// array → the list want to group.
// callback → a function that tells how to group (returns the "label").

const arr = [-99 - 32, 76, 542, -22, 5, 876]; // suppose we want to seperate the positves and negatives in an object as keypair values
const newArr = Object.groupBy(arr, (ele) =>
  ele > 0 ? "postive's" : "negative's"
);
//here we are defining that values greater than 0 be put in postive's property and less than zero in negative's
console.log(newArr);
//  negative's: [ -131, -22 ],
//  postive's: [ 76, 542, 5, 876 ]

/*
🤯 Why it’s useful?
   > Before this, you had to manually loop with reduce. Now, one clean line does the job → less code, more clarity!
*/
