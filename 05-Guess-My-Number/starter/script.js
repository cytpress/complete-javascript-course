'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

function displayMessage(conditions) {
    document.querySelector('.message').textContent = conditions;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        displayMessage('No Number.');
    } else if (guess === secretNumber) {
        displayMessage('You Win!');
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? `Too High!` : `Too Low!`);
    }
    if (score <= 0) {
        displayMessage(`You Lost`);
        document.querySelector('.score').textContent = 0;
    }

})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20 + 1);
    document.querySelector('.guess').value = '';
    score = 20;
    // document.querySelector('.score').value = 20;
    document.querySelector('.score').textContent = score;
    displayMessage(`Start guessing...`);
    console.log(secretNumber);
})
