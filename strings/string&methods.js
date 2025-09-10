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
