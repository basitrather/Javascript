"use Strict";
//rest operator (...)
// Used on the left side of = during destructuring to collect the “rest” of the values into an object.
// example
const obj1 = {
  age: 33,
  id: 2209,
  cvNo: 897,
  formNo: 76,
};
const { age, id, ...others } = obj1; // Here, age and id are destructured into variables, and the rest go into others as an object.
console.log(age, id, others); //age = 33 id = 2209 others = { cvNo: 897, formNo: 76 }.

// Example: Combining Destructuring Rest operator Spread operator Shallow copy with modifications
const user = {
  id: 101,
  Name: "Basit",
  skills: ["JS", "HTML", "CSS", "React"],
  address: {
    city: "Srinagar",
    country: "India",
  },
};
const {
  Name,
  address: { city },
  ...rest
} = user;
console.log(Name, city, rest);

const shallowUser = {
  ...user,
  Name: "Rather",
  skills: [...user.skills, "Node.js"],
};
console.log(shallowUser);
