// Coding Challenge #1

/* 
Build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number) ✅
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)✅
2. Call this method whenever the user clicks the "Answer poll" button.✅
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
*/
const pollBtn = document.querySelector("button");
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let userInput = Number(
      prompt(
        // "What is your favourite programming language? 0: JavaScript 1: Python 2: Rust 3: C++ (Write option number)"
        `${this.question}\n${this.options
          .join()
          .replaceAll(",", "\n")}\n(Write option number)`
      )
    );
    for (let index = 0; index < this.answers.length; index++) {
      if (index === userInput) {
        this.answers[index] += 1;
      }
    }
    this.displayResults("string");
  },
  displayResults(type) {
    if (type === "string")
      console.log(`Pool results as of now: ${this.answers.join(",")}`);
    else console.log(`Pool results as of now: ${this.answers}`);
  },
};
pollBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));
