"use strict";
//object
const cafe = {
  starterMenu: ["Paneer tikka", "samosas", "dahi puri"],
  mainCourse: ["Egg Curry", "Prawns", "Biryani"],
  desert: ["iceCream", "chocoTub", "rasgullai"],
};
//destructuring Objects;

const { starterMenu, mainCourse, desert } = cafe; // Setting the name of the variables same as the properties, Can name them in any order no(,,) needed like in array
console.log(starterMenu, mainCourse, desert); // ['Egg Curry', 'Prawns', 'Biryani'] ['iceCream', 'chocoTub', 'rasgullai']

const { starterMenu: starters, mainCourse: mainMeal } = cafe; // Now the variable names are renamed using this ':'
console.log(starters, mainMeal); //['Paneer tikka', 'samosas', 'dahi puri'] ['Egg Curry', 'Prawns', 'Biryani']
mainMeal;

//default values
const { desi = ["dal", "makhni"] } = cafe; // even though the desi property is not in the cafe object we have set it by default
console.log(desi); //['dal', 'makhni']
// Muttating variables
let a = 1;
let b = 3;
const obj = {
  a: 7745,
  b: 89890,
  c: 88,
};
({ a, b } = obj); //Reassign existing variables from an object without redeclaring them. [()tells JS this is destructuring].
console.log(a, b); // 7745 89890; here the the variables will be printed

//nested Objects
const user = {
  name: "Basit",
  age: 25,
  address: {
    city: "Srinagar",
    country: "India",
  },
};
const {
  name,
  address: { city, country },
} = user;
//address: { city, country } means → go inside address object and pull city & country.
console.log(Name); // Basit
console.log(city); // Srinagar
console.log(country); // India
