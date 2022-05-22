'use strict';
// let plusScore = 0;
// let currentScore = document.querySelector('.current-score');
// let newBtn = document.querySelector('.btn--new');
// let highCurrent = 0;
// let score = 0;

// // let randomNum = 1;
// document.querySelector('.btn--roll').addEventListener('click', function (e) {
//   var randomNum = Number(Math.ceil(Math.random() * 6));

//   document.querySelector('.dice').src = `dice-${randomNum}.png`;

//   if (randomNum !== 1) {
//     plusScore += randomNum;
//     document.querySelector('#current--0').textContent = plusScore;
//     highCurrent = plusScore;
//   } else {
//     // currentScore.textContent;
//     document.querySelector('.player--0').classList.toggle('player--active');
//     document.querySelector('.player--1').classList.toggle('player--active');
//     document.querySelector('#current--0').textContent = '0';
//   }
//   console.log(randomNum);
// });
// document.querySelector('.btn--hold').addEventListener('click', function () {
//   document.querySelector('.score').textContent = score + highCurrent;
//   document.querySelector('.player--1').classList.toggle('player--active');
//   document.querySelector('.player--0').classList.toggle('player--active');
// });
// --------------------------------------
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('.hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating a random dice roll
    const dice = Number(Math.ceil(Math.random() * 6));

    // Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // Check for rolled. if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .getElementById(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .getElementById(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// --------Destructing arrays----------
// 1. arrayyni variablega taqsimlash---------

// const arr1 = [1, 2, 3, 4];
// const [a, b, s, d] = arr1;
// console.log(a, b, s, d);

// 2. 1- va 3- alem.ni tanlab olish-----------

// const arr2 = [1, 2, 3, 4];
// const [a, , b] = arr2;
// console.log(a, b);

// 3. o`zgaruvchilarni qiymatlarini o`rnini almashtirish--------

// const arr3 = [1, 2, 3, 4];
// let [a, b] = arr3;
// [a, b] = [b, a];
// console.log(a, b);

// 4. Ichma-ich arraylarni ozg.ga saqlash-----------

// const arr4 = [1, 2, 3, [4, 5, [6, 7]]];
// const [a, b, c, [d, e, [f, g]]] = arr4;
// console.log(a, b, c, d, e, f, g);

// 5. arrayni o`zg.ga olanda, o`zg.ga qiy berish--------

// const arr5 = [1, 2];
// const [a = 10, b = 10, s = 10, d = 10] = arr5;
// console.log(a, b, s, d);

// ---------Destructing objects--------------
// 1. object elem.ni o`zg.ga olish----------

// const obj1 = {
//   x: 'salom',
//   y: 20,
//   age: 30,
// };
// const { x, y, age } = obj1;
// console.log(x, y, age);

// 2. variablega boshlang`ich qiy. berish----------

// const obj2 = {
//   x: 'salom',
//   age: 30,
// };
// const { x = [], y = [], age = [] } = obj2;
// console.log(x, y, age);

// 3. ichma-ich obj.ni variablega olish------------

// const obj3 = {
//   x: 'salom',
//   age: 30,
//   name1: {
//     firsName: 'bekzod',
//     lastname: 'Baratov',
//   },
// };
// const {
//   x,
//   age,
//   name1: { firsName: ismim, lastname: familyam },
// } = obj3;
// console.log(x, age, ismim, familyam);

// 4. fuc.ga arg sifatida object berish--------------

// let f = function (obj4) {
//   const { x, y, z } = obj4;
//   return x + y + z;
// };
// const t = {
//   x: 10,
//   y: 12,
//   z: 20,
// };
// console.log(f(t));

// ----------The Spread operators---------
// 1. 2ta arrayni qo`shish-----------

// const arr6 = [2, 3, 4];
// const newArr = [8, 9, ...arr6];
// console.log(newArr);

// 2. arrayga yangi elem qo`shish----------

// const arr7 = [2, 3, 4];
// arr7 = [8, 9, ...arr7];
// console.log(arr7);

// 3. arraydan nusxa olish-----------

// const arr8 = [2, 3, 4];
// copyArr = [...arr8];
// console.log(copyArr);

// 4.
