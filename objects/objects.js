// Object storing personal details and an array
const newObject = {
    fullName: 'zayn',           // Full name of the person
    age: 2024 - 1976,           // Calculate age by subtracting birth year from current year
    country: 'india',           // Country of the person
    continent: 'asia',          // Continent the person is from
    arrayName: [1, 2, 3, 4, 5]  // Array stored inside the object
};

// Access and log the full name and country using dot notation
console.log(newObject.fullName, newObject.country);

// Access and log the continent and arrayName using bracket notation
console.log(newObject['continent'], newObject['arrayName']); // Keys must be in quotes when using bracket notation

// Updating object properties using dot notation
newObject.country = 'pak';           // Change country to 'pak'
newObject['fullName'] = 'shaifi';   // Change full name to 'shaifi'

// Note: Bracket notation allows performing operations or using variables to access keys


// Object containing personal details and a method
const functionInObject = {
    fullName: 'zayn',           // Full name of the person
    age: 2024 - 1976,           // Calculate the age (2024 - 1976)
    country: 'india',           // Country of the person
    continent: 'asia',          // Continent the person is from
    
    fullInformation: function () {
        return `i am a method or function inside of an object`;  
    }     
};

// Calling the function inside the object using dot notation
console.log(functionInObject.fullInformation());

