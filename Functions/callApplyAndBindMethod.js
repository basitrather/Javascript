"use strict";
//An airline booking object
const kingFisher = {
  airline: "kingFisher Airlines",
  iataCode: "KFR",
  booking: [],
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airline} ${this.iataCode}-${flightNum}`
    );
    this.booking.push({
      passengerName: name,
      flight: `${this.iataCode} ${flightNum}`,
    });
  },
};
kingFisher.book("Basit", "253");

// Now comes the call method
// lets suppose some new airline was introduced and it needs to
// store the same method book() in it instead to copy paste the
// same code we will use call() method

const indigo = {
  airline: "Indigo Airlines",
  iataCode: "ING",
  booking: [],
};
//we will store the kingfishers method inside a variable
const bookMethod = kingFisher.book;
/*
Now the method is stored in the bookMethod variable but it
contains this keyword in it so we can use it only with an
object that has the same properties as the kingfisher has
*/
bookMethod.call(indigo, "Taureed", 76);
// we are calling the book method on the indigo and pass the
// required arguments, The method will be excuted and do the
// neccesary work

// The apply method works the same but it accepts the arguments in array or object only. functionality is the same, Also it also invokes immediately after being called on the object
// Example
const vistara = {
  airline: "Vistara Airlines",
  iataCode: "VSA",
  booking: [],
};
const passengerArr = ["mohsin", 88];
bookMethod.apply(vistara, passengerArr);

//Now we have the bind method:
/*
Bind method does not invoke the method immediately rather it
store it into a variable but the methods this keyword will now
only point toward the object it has been called on to.
And the variable containing method will always be used with
the binded object only
*/
const spicejet = {
  airline: "SpiceJet Airlines",
  iataCode: "SJT",
  booking: [],
};
const spicejetBookMethod = bookMethod.bind(spicejet);
// Function called and stored in the variable but not invoked
// now we can use the spicejetBookMethod any time to invoke the
// function on the spicejet object rather than calling the method everytime

spicejetBookMethod("Tehsheem", 88);
// now the function is excuted on the specific object (spicejet)
// Everytime we want to  invoke to book on the spicejet we will
// in use spicejetBookMethod(arguments)

//challenge
// Make this using function returning function
const addTax = function (rate, value) {
  return value + value * rate;
};
const vatTax = addTax.bind(null, 0.18);
console.log(vatTax(200));

// Answer
const outerTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const innerTax = outerTax(0.18);
console.log(innerTax(100));
