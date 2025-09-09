"use strict";
/*  LoopingInObjects: unlike in arrays,sets,maops etc...
    The Objects are not itterables so cant we directly use normal
    loop methods over them rather we use the loop methods on their 
    properties,which can be looping over keys, values or entire properties
*/
const user = {
  id: 101,
  name: "Basit",
  contact: {
    email: "basit@example.com",
  },
};

// Looping over keys:
for (const ele of Object.keys(user)) {
  //it will itterate over  keys in user
  console.log(ele); // here it will log the keys
}
//looping over the values:
for (const ele of Object.values(user)) {
  //it will itterate over values in user
  console.log(ele); // here it will log the values
}
// looping over the properties
for (const ele of Object.entries(user)) {
  //it will itterate over the properties of user
  console.log(ele); // here it will log the properties of the user object
}
for (const [key, value] of Object.entries(user)) {
  //it will itterate over the properties of user
  console.log(key, value); // here it will log both the values and the keys of the object user
}
