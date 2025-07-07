'use strict';

// selecting elements
const p1con = document.querySelector('.player--0');
const p2con = document.querySelector('.player--1');
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
let playing = true;

// score managing elements
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

// player container elements selector
const p1Con = document.querySelector('.player--0');
const p2Con = document.querySelector('.player--1');

// debugger
console.log(dice);

// functions
const changeToZero = (variable0, variable1) => {
    variable0.textContent = 0;
    variable1.textContent = 0;
}

const toggler = (var0, var1) => {
    var0.classList.toggle('player--active');
    var1.classList.toggle('player--active');
}

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    toggler(p1con, p2con)
}

// begin conditions 
score0.textContent = 0;
changeToZero(score0, score1);
dice.classList.add('hidden');

//event listeners
// diceroll function/logic
rollDiceButton.addEventListener('click', function () {
    if (playing) {
        const diceGen = Math.trunc(Math.random() * 6) + 1;
        dice.classList.remove('hidden');
        dice.src = `dice-${diceGen}.png`;
        console.log(diceGen);
        if (diceGen !== 1) {
            currentScore += diceGen;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

holdButton.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dice.classList.add('hidden');
        } else {
            switchPlayer();
        }
    }

})