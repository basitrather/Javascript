// //ARRAY METHODS
const countries = ["india", "pakistan", "nepal", "USA"];

// Push method adds a new item at the end of the array
countries.push("bangladesh");
// Push method also returns the new length of the array after adding an item
const total = countries.push("UAE"); // total now holds the length of the array

// Unshift method adds a new item at the beginning of the array
countries.unshift("brazil");

// Pop method removes the last item from the array
countries.pop();
// Pop method also returns the removed item
const poped = countries.pop(); // 'poped' holds the value of the removed item

// Includes method checks if an item exists in the array
countries.includes("USA"); // Returns true if 'USA' is in the array, otherwise false
// Checking if 'france' exists in the array
countries.includes("france"); // Returns false as 'france' is not in the array

//Slice method slice the array and returns a new array without mutating the OG array
const a = [1, 2, 3, 4, 5, 6];
console.log(a.slice(3)); //[ 4, 5, 6 ] Here it returns the sliced elements from the index 3
console.log(a.slice(2, 6)); //[ 3, 4, 5, 6 ] here we are setting the slice start and end point
console.log(a.slice(-1)); // here we are starting from the reverse order

//Splice works same as slice but it mutates the orignal array
const b = [2, 3, 456, 87, 8];
b.splice(2, 4); //same as slice start and end point
console.log(b); //[ 2, 3 ] now the orginal array is mutated and now have only [ 2, 3 ] only.

// reverse method reverse and mutate the orginal array
const letters = ["a", "k", "j", "y"];
letters.reverse();
console.log(letters);

// concat method + the arrays
const c = a.concat(b);
console.log(c);

// join works same as string joins the array by some charcters and converts it to string
console.log(c.join("-"));

// 'at' method is used to grab any element of the array by index number it also works on strings
const numbers = [2, 3, 5, 6, 8, 9];
console.log(numbers.at(1)); // 3
//  we can also use a[1] but why use this?
// it is useful in some cases when we have to get elements from the last or from the index
console.log(numbers.at(-2)); // 8 :it will grab the element from the second last index of the array
