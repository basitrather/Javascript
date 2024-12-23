'use strict';
let RanNumber = Math.trunc(Math.random() * 18) + 2;
let highScore = 0;
let score = 20;
let reset = document.querySelector('.reset')
reset.addEventListener('click',function(){ 
    location.reload();
});
document.querySelector('.check').addEventListener('click', function () {
    if ((document.querySelector('.userInput').value) !== '') {
        score = score - 1;
        if (score < 0) {
            document.querySelector('.result').textContent = 'you lost the game try again';
            return;
        }
        document.querySelector('body').style.backgroundColor = "#222";
        const userInput = Number(document.querySelector('.userInput').value);
        if (userInput === RanNumber) {
            document.querySelector('.result').textContent = 'congrats you won';
            highScore = highScore + userInput;
            document.querySelector('.highScore').textContent = highScore;
            document.querySelector('body').style.backgroundColor = "green";
            RanNumber = Math.trunc(Math.random() * 18) + 2;
        }
        else if (userInput < RanNumber) {
            document.querySelector('.result').textContent = 'too low!';
        }
        else {
            document.querySelector('.result').textContent = 'too high!';
        }
        document.querySelector('.score').textContent = score;
    }
});