"use strict";
//There is also a way to decleare and assign values in map at one place
const items = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
  ["key4", "value4"],
]); //assign and create at same place.
console.log(items);

//convert objects to map. since the object return map log like structure we can convert it to map

const obj = {
  userName: "basit",
  age: 33,
  class: "12th",
};
// First decleare a map then pass the entries of the object
const objToMap = new Map(Object.entries(obj));
console.log(objToMap); //{'userName' => 'basit', 'age' => 33, 'class' => '12th'}

//itteration: Same as we did with objects but we dont to enter object.entries rather enter the set variable itself
for (const [key, value] of items) {
  console.log(key, value);
}

//convert map to array
console.log([...items]);
