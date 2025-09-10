"use strict";
//Sets and maps were introduced in ES6 in 2020, before that javaScript had only objects and arrays
//set: a collection of unique data that is immutable or can never be changed.
// A set can hold any data that can be itterared like: string,array etc.
// A set cannot have duplicate values it consider duplicate values as one.
// sets have no index, meaning they are orderless
// Whenever we spread a set by (....) it turns into an array

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
if we want to retrive data then array is the best datatype to go for*/

//Example: if we want to delete the duplicates in an array.
const members = ["basit", "taureed", "tehsheem", "basit", "haseeb", "mohsin"]; // Duplicates
const memebersUpdated = [...new Set(members)]; // created a Set with an array (removed duplicates), then spread it back into a new array.Then stored in the decleared varibale.
console.log(memebersUpdated); //Updated array.

//Data
const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);
// New set methods introduced in ES2025
//Method 01: Intersection Method: This method finds the common elements between two sets.

const commonFoods = mexicanFoods.intersection(italianFoods);
console.log(commonFoods); //{'tomatoes', 'garlic'}

//Method 01: Union Method: Joins two sets into one, excluding duplicates.

const foodFusion = italianFoods.union(mexicanFoods);
console.log(foodFusion); //{'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic','basil','tortillas','beans','rice','avocado'}

//Method 03: Difference Method: method compares two sets and returns a new set containing elements that are present in the first set but not in the second set.

const foodDifference = italianFoods.difference(mexicanFoods);
console.log(foodDifference); //{'pasta', 'gnocchi', 'olive oil', 'basil'}

//These are enough; the rest can be checked only if needed.
