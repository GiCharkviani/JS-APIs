'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number! 🎁 🧬'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 15

console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


const checkFunc = function () {
  const guess = +document.querySelector('.guess').value;
  console.log(typeof guess, guess);

  // when there is not input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎁 🧬';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'

    document.querySelector('.number').style.width = '30rem'

    //when player wins
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '😨 Too high!';

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😭 Your lost the game';
      document.querySelector('body').style.backgroundColor = 'red'
    }

    // when guess is too high
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = '😌 Too low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '😭 Your lost the game';
      document.querySelector('body').style.backgroundColor = 'red'
    }

     // when guess is too low
  }
};

const againFunc = function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', checkFunc);


document.querySelector('.again').addEventListener('click', againFunc);
