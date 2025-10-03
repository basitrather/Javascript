//Flat method is used to convert arrays inside the array into one array
// Definition: .flat(depth) creates a new array with all sub-array elements concatenated into it, up to the specified depth.
//Example: [[1,2],3,4,[5,6,7]] => [1,2,3,4,5,6,7]. herewe convverted everything to one array or simplifed there array

const arr = [[1, 2], 3, 4, [5, 6, 7]];
console.log(arr.flat()); // [1,2,3,4,5,6,7]. we flatned the array,also this works one first nested array only

//we can go as much as deeper into the nested arraysby provifing the value in flat(here)
// Example:
const deepNestedArray = [[88, [9, [76, 8], 4], 6], 7, [3, 34], 5, 56]; // here we have three level of nested array
console.log(deepNestedArray.flat(3)); //[88, 9, 76,  8, 4, 6, 7,  3, 34, 5,56]

// flatMap method is the combination of the map and flat method but it goes only one level deep in nested array
const arr2 = [1, 2, 3];

// map each number to [n, n*2] then flatten
const result = arr.flatMap((num) => [num, num * 2]);

console.log(result);
// [1, 2, 2, 4, 3, 6]
