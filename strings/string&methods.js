"use strict";
/*A string is a sequence of characters. In JavaScript, it
can be made with single quotes ', double quotes ", or
backticks `*/
// Declearition
const fullName = "Basit Showkat Rather";

//just like arrays strings also have indexs and we can access its aplhabets through indexs
console.log(fullName[10]); //k
console.log("hello"[3]); //l
console.log(fullName.length);

// Methods of strings(methods only return something doesnt change the orginal element)

//IndexOf
console.log(fullName.indexOf("s")); //2 :it will return the first occurance index of 's'
console.log(fullName.lastIndexOf("a")); //15 :it will return the last occurance index of 'a'
// Note: it can also be index of mutiple alphabets.

// slice Method
console.log(fullName.slice(6)); //Showkat Rather: it will return string after the 6th index
console.log(fullName.slice(6, 13)); //Showkat: it will return string after the 6th and before the 13th index.
console.log(fullName.slice(-4)); //ther: it will return string after last 4th alphabet index.

//upperCase Method
console.log(fullName.toUpperCase()); //converts string in upper case

//toLowerCase Method
console.log(fullName.toLowerCase()); //converts string in lower case

//trim Method
console.log(fullName.trim()); //Trim all white spaces from the start and end of the string.

// replace Method
console.log(fullName.replace("t", "l")); // replaces first occurance of something

//replaceAll Method
console.log(fullName.replaceAll("a", "i")); //replace all the occurance of the something
console.log(fullName.replace("Basit", "zeenat").toUpperCase()); //can use mutiple methods at once by '.'

//includes Method
console.log(fullName.includes("Sho")); //true: checks if something is present in the string.

//startsWith Method
console.log(fullName.startsWith("Bas")); //true: checks if the entered parameter is present at the starting of the string

// endsWith Method
console.log(fullName.endsWith("hash")); //false: checks if the entered parameter is present at the ending of the string

//split Method
const inGameName = "the x zabuza";
const splittedName = inGameName.split(" "); //This splits the string into an array by the parameter we have sent

//join method
const joinedName = splittedName.join("-"); // joins the array elements we just splitted

//padStart Method
const padStartName = inGameName.padStart(20, "*"); //it gives padding to the string from the left side. (total space of string, "padding string ")
console.log(padStartName);

//padEnd Method
const padEndName = inGameName.padStart(15, "*"); //same as padStart but on the right side or ending
console.log(padEndName);

//Function to hide the first 12 digits of the credit card
const HideCreds = function () {
  const creditCardDetails = Number(prompt("Enter The Credit Card Details"));
  const cdNumString = creditCardDetails.toString();
  return cdNumString.slice(-4).padStart(16, "*");
};

// function to uppercase the a string
const toUpper = function (name) {
  const splitted = inGameName.split(" ");
  let upperCased = [];
  splitted.forEach((element) => {
    upperCased.push(element[0].toUpperCase() + element.slice(1));
  });
  console.log(upperCased.join(" "));
};
toUpper(inGameName);
