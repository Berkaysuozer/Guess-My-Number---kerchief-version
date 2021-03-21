'use strict';

let random = Math.floor(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
  const guess = document.querySelector('.guess').value;
  console.log(random);

  if (!guess) {
    displayMessage('EMPTY VALUE 💤');
  } else if (guess == random) {
    displayMessage('Correct Number!😊');
    document.querySelector('body').style.background =
      'linear-gradient(27deg, #60b347 50%, green 50%)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = random;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== random) {
    if (score > 0) {
      displayMessage(guess > random ? 'TOO HİGH  💔 ' : 'TOO LOW 💔');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('WTF DUDE YOU LOST THE GAME 💥');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.background =
    'linear-gradient(27deg, #34495e 50%, #2c3e50 50%)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  random = Math.floor(Math.random() * 21);
  document.querySelector('.score').textContent = score;
});
