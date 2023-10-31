import Grid from "../features/game/Grid";

const Game = () => {
  return <Grid />;
  // function startGame() {
  //   resetGame();
  //   const [x, y] = selectGridSize.value.split("x");
  //   halfGridSize = (x * y) / 2;
  //   const gridRows = createCustomGrid(x, y);
  //   gridRows.forEach((row) => {
  //     cardGrid.appendChild(row);
  //   });
  //   countdownIntervalId = startCountdown();
  //   timerIntervalId = startTimer();
  // }

  // function resetGame() {
  //   card1 = null;
  //   card2 = null;
  //   cardMatchCount = 0;
  //   halfGridSize = 0;
  //   isLockedBoard = false;

  //   moveCount = 0;
  //   moveCountSpan.textContent = `Moves: ${moveCount}`;

  //   stopTimers();

  //   cardGrid.innerHTML = null;
  // }
};

export default Game;
