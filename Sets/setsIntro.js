"use strict";
//Sets and maps were introduced in ES6 in 2020, before that js had only objects and arrays
//sets: a collection of unique data that is immutable or can never be changed.
// A set can hold any data that can be itterared like: string,array etc.
// A set cannot have duplicate values it consider duplicate values as one.
// sets have no index, meaning they are orderless

//Declearing a set and some methods of sets

const arraySet = new Set(["basit", "taureed", "tehsheem", "basit", "taureed"]); //[] because array is itterable
const stringSet = new Set("basit"); //""because string is also itterable
console.log(stringSet); // {'b', 'a', 's', 'i', 't'} holds letters of string
console.log(arraySet); // {'basit', 'taureed', 'tehsheem'}.Deleted duplicates
arraySet.has("taureed"); // checks if a certain element is in the set.
arraySet.delete("basit"); //Deletes a creatain element in the set.
arraySet.add("haseeb"); // adss an element in the end of a set.
arraySet.forEach((element) => {
  //looping over sets
  console.log(element);
});
console.log(arraySet.size); //retrives the size of the set
console.log(new Set("basit").size); // This way we confirm the itterables in a set:)

console.log(arraySet);

/*Retrive data from set: There is no way to retrive data back from the set.
we can only check if the data is in the set or not by the 'has' method.
if we want to retrive data then array is the best dataType to go for*/

//Example: if we want to delete the duplicates in the set.
const members = ["basit", "taureed", "tehsheem", "basit", "haseeb", "mohsin"]; // Duplicates
const newMemebers = [...new Set(members)]; // created a Set with an array (removed duplicates), then spread it back into a new array.Then stored in the decleared varibale.
console.log(newMemebers); //Updated array.
