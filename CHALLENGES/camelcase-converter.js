/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM , and conversion will happen when the button is pressed.  
*/
const variableName = document.querySelector(".inputField");
const submitBtn = document.querySelector(".btn");
const displayText = document.querySelector(".displayText");
let temp = [];
let userArray = [];
let finalArray = [];
let conversion = function () {
  userArray.forEach((element, index) => {
    if (index > 0) {
      temp = element[0].toUpperCase() + element.slice(1);
      finalArray.push(temp);
    } else {
      finalArray.push(element);
    }
  });
  convertedElement = finalArray.join("");
  finalArray = [];
  return convertedElement;
};
submitBtn.addEventListener("click", () => {
  let userInput;
  userInput = variableName.value;
  userArray = userInput.split("_");
  conversion();
  console.log(convertedElement);
  displayText.textContent = convertedElement;
});
