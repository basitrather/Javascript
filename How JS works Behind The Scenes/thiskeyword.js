//how this keyword works
// this keyword always points to the object that is calling it
// Object containing personal details and a function
const methodInObject = {
  fullName: "zayn", // Full name of the person
  age: 2024 - 1976, // Calculate the age (2024 - 1976)
  country: "india", // Country of the person
  continent: "asia", // Continent the person is from

  // Function that returns a sentence using 'this' to reference object properties
  fullInformation: function () {
    this.info = `My name is ${this.fullName} and my country is ${this.country}`;
    // 'this' refers to the object the method belongs to (in this case, functionInObject)
    // created an info property to the object by this keyword  this.info
    return this.info;
  },
};

// Calling the function inside the object using dot notation
console.log(methodInObject.fullInformation());
console.log(methodInObject.info); // note this will only work if the method is atleast once called
// this keyword:
// Inside a method, 'this' refers to the object that the method is a part of.
// Outside of an object it points towards the global object that is window objects

// Borrowing methods from another object
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};

const anotherPerson = {
  name: "Bob",
};

// Using call() to borrow the greet method from person and apply it to anotherPerson
person.greet.call(anotherPerson); // Output: Hello, Bob

//The call() method allows you to change the reference of the this keyword,
//setting it to the object you pass as an argument to call().
//So instead of referring to the original object (in your case, obj),
//it refers to the object you specify (in your case, newObj).

//BIND METHOD
//The bind() method in JavaScript creates
// a new function where the this context is permanently set to the
//value provided, and you can also pre-set arguments.
//This method does not execute the function immediately,
//but instead returns a new function that
//can be executed later with any additional arguments
//EXAMPLE

// Object 1 and Object 2
const obj1 = { num: 5 };
const obj2 = { num: 10 };

// Function that uses 'this' to refer to an object property and adds the provided arguments
function add(a, b) {
  return this.num + a + b; // 'this.num' refers to the 'num' property of the object to which the function is bound
}

// Using bind to set the context of 'this' to obj1, and pre-set the first argument as 2
const boundAdd = add.bind(obj1, 2);

// The bind() method does NOT call the function immediately.
// Instead, it returns a new function where 'this' is fixed (bound to obj1), and the first argument (2) is pre-set.

// Now, we can call the new function and pass the second argument
console.log(boundAdd(3)); // Output: 5 (from obj1) + 2 (set via bind) + 3 (provided when calling) = 10

// In this case, when we call boundAdd(3), the value of 'this.num' will always refer to obj1.num (which is 5),
// and the pre-set argument (2) is added to it, followed by the argument passed during the function call (3).
