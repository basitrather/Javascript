"use strict";
// For...of is used to ittearte over the values of the iterable objects (like: arrays,string,maps,sets etc)

// Syntax
// for (const element of iterable) {code using element}

/*  
    Why use for...of instead of forEach or others?
    forEach works only on arrays.
    forEach, you cannot break or continue early.
    -------------------------------------------------------------
    for...of works on arrays, strings, sets, maps, NodeLists, etc 
    for...of, you can stop the loop whenever you want.
*/

//Example 01
const arr1 = [3, 4, 56, 78, 44];
for (const ele of arr1) {
  //   console.log(ele);
}

//Example 02
const arr2 = ["basit", "taureed", "tehsheem", "haseeb", "mohsin"];
for (const element of arr2) {
  if (element == "basit" || element == "tehsheem") {
    console.log(`${element}Computer Science Background`);
    break; // if the coondition gets true it will exut the loop as the for...of stop whenever we want.
  }
}
