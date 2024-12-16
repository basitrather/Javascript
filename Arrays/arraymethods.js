//ARRAY METHODS
const countries = ['india', 'pakistan', 'nepal', 'USA'];


// Push method adds a new item at the end of the array
countries.push('bangladesh');

// Push method also returns the new length of the array after adding an item
const total = countries.push('UAE'); // total now holds the length of the array

// Unshift method adds a new item at the beginning of the array
countries.unshift('brazil');

// Pop method removes the last item from the array
countries.pop();

// Pop method also returns the removed item
const poped = countries.pop(); // 'poped' holds the value of the removed item

// Includes method checks if an item exists in the array
countries.includes('USA'); // Returns true if 'USA' is in the array, otherwise false

// Checking if 'france' exists in the array
countries.includes('france'); // Returns false as 'france' is not in the array
