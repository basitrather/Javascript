"use strict";
/*
call: Invokes a function with a specified 'this' value and arguments passed individually.

apply: Invokes a function with a specified 'this' value and arguments passed as an array (or array-like object).
*/
//Example;
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

// Now comes the bind method
// lets suppose some new airline was introduced and it needs to
// store the same method book() in it instead to copy paste the
// same code we will use bind method

const indigo = {
  airline: "Indigo Airlines",
  iataCode: "ING",
  booking: [],
};
//we will store the kingfishers method inside a variable
const bookMethod = kingFisher.book;
/*
Now the method is stored in the book Method but it contains this
keyword in it so we can use it only inside an object as a method
and the object should have same named properties so it can acces
them properly
*/
bookMethod.call(indigo, "Taureed", 76);
// we are calling the book method on the indigo and pass the
// required arguments, Indigo flight shall be updated now

// The apply method works the same but it accepts the arguments in array or object only. functionality is the same
// Example
const vistara = {
  airline: "Vistara Airlines",
  iataCode: "VSA",
  booking: [],
};
const passengerArr = ["mohsin", 88];
bookMethod.apply(vistara, passengerArr);
// it is not recommended to use apply method as we have a
// convienent way of using one object method inside another by
// call() Method
