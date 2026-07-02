'use strict';

const secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function() {
    window.location.reload();
});

document.querySelector('.check').addEventListener
('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('No Number!')
    } else if (guess === secretNumber){
        displayMessage('🎉 Correct Number!')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

         } else if (guess !== secretNumber) { 
            if (score > 1) {
                displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                displayMessage('You lost :(');
                document.querySelector('.score').textContent = 0;
            }
         }
});