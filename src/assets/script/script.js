let card1 = null;
let card2 = null;
let cardMatchCount = 0;
let halfGridSize = 0;
let isLockedBoard = false;
// TODO: implement time entry/selection for custom countdown
// TODO: implement lose conditions/challenges for timers
let countdownIntervalId = null;
let timerIntervalId = null;

let moveCount = 0;
const moveCountSpan = document.querySelector("#move-count");

const selectGridSize = document.querySelector("#select-grid-size");
const btnStartGame = document.querySelector("#btn-start-game");
const cardGrid = document.querySelector("#card-grid");
btnStartGame.addEventListener("click", startGame);

const btnOptions = document.getElementById("btn-options");
const optionsPanel = document.getElementById("options-panel");
btnOptions.addEventListener("click", () => {
  optionsPanel.classList.toggle("hide");
});
