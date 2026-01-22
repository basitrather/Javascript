// Named export (must be imported with same name)
export const greetings = function (firstName, lastName) {
  const welcomeMessege = `Hello! ${firstName} ${lastName}, Welcome Onboard`;
  console.log(welcomeMessege);
};

// Default export (only ONE per module)
export default function (firstName, lastName) {
  const userName = `${firstName.toLowerCase()}.${lastName.toLowerCase()}0${Math.trunc(
    Math.random() * 9 + 1,
  )}@gmail.com`;
  console.log(userName);
}
