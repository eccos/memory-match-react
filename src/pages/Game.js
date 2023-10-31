import Grid from "../features/game/Grid";

const Game = () => {
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

  // function checkCards() {
  //   if (card1.cardNumber === card2.cardNumber) {
  //     card1.nextElementSibling.style.border = "1px solid black";
  //     card2.nextElementSibling.style.border = "1px solid black";
  //     cardMatchCount++;
  //     card1 = null;
  //     card2 = null;
  //   } else {
  //     isLockedBoard = true;
  //     setTimeout(hideCards, 1000);
  //   }
  // }

  // function checkWinCondition() {
  //   if (cardMatchCount < halfGridSize - 1) {
  //     return false;
  //   }
  //   // win early if only 2 cards remain
  //   stopTimers();
  //   cardGrid.innerHTML = null;
  //   cardGrid.textContent = `YOU WIN! It took you ${moveCount} moves.`;
  //   return true;
  // }

  return <Grid />;
};

export default Game;
