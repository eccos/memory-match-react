import { Container } from "reactstrap";
import CardsList from "./CardsList";

const Grid = () => {
  return (
    <Container>
      <CardsList />
    </Container>
  );
  // function hideCards() {
  //   card1.style.display = "block";
  //   card2.style.display = "block";
  //   card1.nextElementSibling.style.display = "none";
  //   card2.nextElementSibling.style.display = "none";
  //   card1 = null;
  //   card2 = null;
  //   isLockedBoard = false;
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
};

export default Grid;
