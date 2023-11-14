let halfGridSize = 0;
// TODO: implement time entry/selection for custom countdown
// TODO: implement lose conditions/challenges for timers
let countdownIntervalId = null;
let timerIntervalId = null;

const btnOptions = document.getElementById("btn-options");
const optionsPanel = document.getElementById("options-panel");
btnOptions.addEventListener("click", () => {
  optionsPanel.classList.toggle("hide");
});
