/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

*/
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];
// const checkDogs = function (dogsJulia, dogsKate) {
//   shallowDogsJulia = [...dogsJulia];
//   shallowDogsJulia.splice(0, 1);
//   shallowDogsJulia.splice(-2, 2);
//   const finalData = shallowDogsJulia.concat(dogsKate);
//   console.log(finalData);
//   finalData.forEach((age, index) => {
//     if (age >= 3) {
//       console.log(
//         `Dog number ${index + 1} is an adult, and is ${age} years old`
//       );
//     } else {
//       console.log(`Dog number ${index + 1} is still a puppy 🐶`);
//     }
//   });
// };
// checkDogs(dogsJulia, dogsKate);

//Challenge 02

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
*/
const calcAverageHumanAge = function (dogAges) {
  const humanAge = dogAges.map((age) => {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  const adultDogs = humanAge.filter((age) => {
    return age >= 18;
  });
  const totalAdultDogsAge = adultDogs.reduce((acc, ele) => acc + ele, 0);
  const averageAge = totalAdultDogsAge / adultDogs.length;
  console.log(averageAge);
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
