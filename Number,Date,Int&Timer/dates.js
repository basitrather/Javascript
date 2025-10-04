// Date is a built-in object that lets you work with dates and times.

// Current Date and Time
const nowDateTime = new Date();
console.log(nowDateTime); //2025-10-04T15:45:57.771Z

// Specific Date
const date = new Date(2025, 9, 4, 20, 21); // 2025=Year,09=Month (month starts from 0),4=day,20=hours,21minutes
console.log(date);

// Get parts of the date
const now = new Date();
console.log(now.getFullYear()); // 2025
console.log(now.getMonth()); // 0–11 (0 = Jan, 9 = Oct)
console.log(now.getDate()); // Day of the month 1–31
console.log(now.getDay()); // Day of the week 0–6 (0 = Sunday)
console.log(now.getHours()); // 0–23
console.log(now.getMinutes()); // 0–59
console.log(now.getSeconds()); // 0–59

//Set Parts of a Date
const todayDate = new Date();
todayDate.setFullYear(2026);
todayDate.setMonth(0); // Jan
todayDate.setDate(15);
todayDate.setHours(10);
todayDate.setMinutes(30);
console.log(todayDate);

// A timestamp is just a number that represents a specific point in time.
// In JavaScript, it’s the milliseconds since January 1, 1970, 00:00:00 UTC (called “Unix epoch”).

const n = new Date();
console.log(n.getTime()); //This number is huge because it counts all milliseconds since 1 Jan 1970.
