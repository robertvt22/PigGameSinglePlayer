const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const closeModal = document.querySelector(".close-modal");

const currentScore = document.querySelector(".currentScore-game");
const movesScore = document.querySelector(".movesLeft-game");
const totalScore = document.querySelector(".totalScore-game");
const bestScore = document.querySelector(".bestScore-game");

const dice = document.querySelector(".dice");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const winner = document.querySelector("body");

let currentScoreGame = 0;
let movesScoreGame = 10;
let totalScoreGame = 0;
let bestScoreGame = 0;

const noEnoughMoves = function () {
  dice.classList.add("hidden");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  currentScoreGame = 0;
  currentScore.textContent = currentScoreGame;
  movesScoreGame = 0;
  movesScore.textContent = movesScoreGame;
};

btnNew.addEventListener("click", function () {
  dice.classList.add("hidden");
  winner.classList.remove("winner");
  currentScoreGame = 0;
  movesScoreGame = 10;
  totalScoreGame = 0;
  currentScore.textContent = currentScoreGame;
  movesScore.textContent = 0;
  totalScore.textContent = totalScoreGame;
});

btnRoll.addEventListener("click", function () {
  dice.classList.remove("hidden");
  let luckyNumber = Math.trunc(Math.random() * 6) + 1;
  dice.style.background = `url(img/dice-${luckyNumber}.png) no-repeat center center/cover`;
  movesScore.textContent = movesScoreGame;

  if (movesScoreGame < 1) {
    noEnoughMoves();
  } else if (luckyNumber !== 1) {
    currentScoreGame += luckyNumber;
    currentScore.textContent = currentScoreGame;
  } else {
    movesScoreGame--;
    movesScore.textContent = movesScoreGame;
    currentScoreGame = 0;
    currentScore.textContent = currentScoreGame;
  }
});

btnHold.addEventListener("click", function () {
  dice.classList.add("hidden");
  if (currentScoreGame === 0 && movesScoreGame > 0) {
    movesScore.textContent = movesScoreGame;
    alert("Roll the Dice");
  } else if (movesScoreGame < 1) {
    noEnoughMoves();
  } else {
    totalScoreGame += currentScoreGame;
    totalScore.textContent = totalScoreGame;
    currentScoreGame = 0;
    currentScore.textContent = currentScoreGame;
    movesScoreGame--;
    movesScore.textContent = movesScoreGame;
    if (totalScoreGame >= 10) {
      winner.classList.add("winner");
      if (movesScoreGame >= bestScoreGame) {
        bestScoreGame = movesScoreGame + 1;
        bestScore.textContent = bestScoreGame;
      }
    }
  }
});

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
