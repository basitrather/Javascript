//how this keyword works
// Object containing personal details and a function
const methodInObject = {
    fullName: 'zayn',           // Full name of the person
    age: 2024 - 1976,           // Calculate the age (2024 - 1976)
    country: 'india',           // Country of the person
    continent: 'asia',          // Continent the person is from
    
    // Function that returns a sentence using 'this' to reference object properties
    fullInformation: function () {
        this.info= `My name is ${this.fullName} and my country is ${this.country}`;  
        // 'this' refers to the object the method belongs to (in this case, functionInObject)
        // created an info property to the object by this keyword  this.info
        return this.info;
    }     
};

// Calling the function inside the object using dot notation
console.log(methodInObject.fullInformation());
console.log(methodInObject.info); // note this will only work if the method is atleast once called
// this keyword:
// Inside a method, 'this' refers to the object that the method is a part of.
// Outside of an object it points towards the global object that is window objects