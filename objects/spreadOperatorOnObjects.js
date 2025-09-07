// Objects
const restaurant = {
  starter: ["frenchFries", "Spring Rolls", "Wonton Soup"],
  main: ["pizza", "burger", "chowmen"],
}; //object
const newRestaurant = {
  foundedIn: 1998,
  ...restaurant,
  founder: "Guiseppe",
}; // ...restaurant is a spread operator it spreads the properties of the restraunt in a new object
console.log(newRestaurant); //
