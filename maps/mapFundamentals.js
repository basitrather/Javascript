"use strict";
/*A Map is like an object, but more powerful.
    It stores key-value pairs, just like objects, but:
    Keys can be any type: strings, numbers, objects, functions… anything!
    Maintains the order of insertion.
    Has a size property to check how many pairs there are 
*/
// Declearing a Map
const newMap = new Map();

//Assign properties to set by the set methods set();
newMap.set("name", "basit"); //Here, the key can be any data type; 'name' is the key and 'Basit' is the value, separated by a comma.
console.log(newMap); //{'name' => 'basit'}

// assigning mutiple properties
newMap
  .set("age", 25)
  .set("city", "srinagar")
  .set("state", "jammu&kashmir")
  .set("graduated", true);

// Some methods similar to sets because maps and  sets were introduced in ES2020

newMap.has("state"); // checks if key is present
newMap.delete("state"); // deletes the selected key
newMap.size; //returns the size of a map
newMap.clear(); //deletes all the the properties in the map
console.log(newMap);

//we can also store arrays,function and objects etc.
// if we wanna use array and objects as a key we need to predefine the objs and arr outisde in a variable

//Here are some examples
const arrKey = [7, 8, 6, 5, 4];
const objKey = {
  userName: "basit",
  age: 25,
};
newMap.set(arrKey, "arrKey").set(objKey, "objkey");
console.log(newMap);

//we can also store the DOM elements in the map keys
newMap.set(document.body, "Body");
