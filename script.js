'use strict';
// selecting elements
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const p1Score = document.getElementById('current--0');
const p2Score = document.getElementById('current--1');
// buttons
const newGameButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
//dice
const dice = document.querySelector('.dice');
// score managing elements
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

// debugger
console.log(dice);

// functions
const changeToZero = (variable0, variable1) => {
    variable0.textContent = 0;
    variable1.textContent = 0;
}

// begin conditions 
score0.textContent = 0;
changeToZero(score0, score1)
dice.classList.add('hidden');

// diceroll functions
rollDiceButton.addEventListener('click', function () {
    const diceGen = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceGen}.png`;
    console.log(diceGen);
    if (diceGen !== 1) {
        currentScore += diceGen;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        console.log(currentScore);
    } else {
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
    }
})