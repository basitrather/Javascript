'use strict';
let RanNumber = Math.trunc(Math.random() * 18) + 2; // Random number generated on page refresh
let highScore = 0; // The initial highscore
let score = 20; // Total tries for the user before the game ends
let bodyColor = document.querySelector('body');
let result =document.querySelector('.result');
// Event listner for reset button to refresh the page once the button clicked
document.querySelector('.reset').addEventListener('click', function () {
    location.reload(); //The location.reload() method in JavaScript is used to refresh or reload the current webpage.
});
//Event listner which checks the userInput is correct to the random number generated
document.querySelector('.check').addEventListener('click', function () {
    if (score < 0) {
        result.textContent = 'you lost the game try again';
        return;
    }
    bodyColor.style.backgroundColor = "#222";
    const userInput = Number(document.querySelector('.userInput').value);
    if (!userInput) {
        result.textContent = ' Please enter the number';
    }
    // if the users guesses correct number 
    else if (userInput === RanNumber) {
        document.querySelector('#correctAnswer').textContent=RanNumber;
        result.textContent = 'Congrats you won';
        highScore = highScore + userInput;
        document.querySelector('.highScore').textContent = highScore;
        bodyColor.style.backgroundColor = "green";
        RanNumber = Math.trunc(Math.random() * 18) + 2;
    }
    // if the users guesses less than the number 
    else if (userInput < RanNumber) {
        result.textContent = 'too low!';
        score--;
    }
    // if the users guesses more than number 
    else {
        result.textContent = 'too high!';
        score--;
    }
    document.querySelector('.score').textContent = score;
});