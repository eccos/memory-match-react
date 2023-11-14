import Card from "./Card";
import { Container, Button } from "reactstrap";
import { useEffect, useState } from "react";

// function createCustomGrid(rowCardLen, colCardLen) {
//   const gridSize = rowCardLen * colCardLen;
//   const rowCardLimit = 12;
//   const colCardLimit = 6;
//   if (rowCardLen > rowCardLimit) {
//     console.error(`Row can only have ${rowCardLimit} cards max`);
//     return;
//   }
//   if (colCardLen > colCardLimit) {
//     console.error(`Column can only have ${colCardLimit} cards max`);
//     return;
//   }
//   if (gridSize % 2 !== 0) {
//     console.error("Grid cannot have an odd number of cards");
//     return;
//   }
//   const uniqueCards = createUniqueCards(gridSize);
//   const pairCards = uniqueCards.concat(uniqueCards);
//   const cards = shuffle(pairCards);

//   const rows = [];
//   let cardIndex = 0;
//   for (let row = 0; row < colCardLen; row++) {
//     // create html row
//     const row = createDomRow();
//     for (let col = 0; col < rowCardLen; col++) {
//       // create html col & create/append card
//       const col = createDomCol();
//       const cardId = "card-" + (cardIndex + 1);
//       const card = createDomFacedownCard(cardId, cards[cardIndex]);
//       const faceupCard = createDomFaceupCard(cardId, cards[cardIndex]);
//       cardIndex++;
//       col.appendChild(card);
//       col.appendChild(faceupCard);
//       row.appendChild(col);
//     }
//     rows.push(row);
//   }
//   return rows;
// }

const rowCount = 2;
const colCount = 3;
const gridSize = rowCount * colCount;
const cardData = createUniqueCards(gridSize);

function createUniqueCards(gridSize) {
  const halfGrid = gridSize / 2;
  const uniqueCards = [];
  for (let i = 0; i < halfGrid; i++) {
    uniqueCards.push({ value: i + 1, matched: false });
  }
  return [...uniqueCards, ...uniqueCards];
}

function shuffle(array) {
  let currentIndex = array.length;
  let randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const CardsList = () => {
  const [cards, setCards] = useState([]);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [turns, setTurns] = useState(0);
  const [isLockedBoard, setIsLockedBoard] = useState(false);

  function startGame() {
    const shuffledCards = shuffle(cardData).map((card, idx) => ({
      ...card,
      id: idx,
    }));
    setCards(shuffledCards);
    setChoice1(null);
    setChoice2(null);
    setTurns(0);
    setIsLockedBoard(false);
  }

  // function startGame() {
  //   halfGridSize = 0;
  //   stopTimers();
  //   const [x, y] = selectGridSize.value.split("x");
  //   halfGridSize = (x * y) / 2;
  //   const gridRows = createCustomGrid(x, y);
  //   gridRows.forEach((row) => {
  //     cardGrid.appendChild(row);
  //   });
  //   countdownIntervalId = startCountdown();
  //   timerIntervalId = startTimer();
  // }

  function checkCards() {
    setIsLockedBoard(true);
    if (choice1.value === choice2.value) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.value === choice1.value) {
            return { ...card, matched: true };
          }
          return card;
        });
      });
      resetChoices();
    } else {
      setTimeout(resetChoices, 1000);
    }
  }

  function resetChoices() {
    setChoice1(null);
    setChoice2(null);
    setIsLockedBoard(false);
  }

  function handleClick(card) {
    if (isLockedBoard) return;
    !choice1 ? setChoice1(card) : setChoice2(card);
  }

  // compare selected cards
  useEffect(() => {
    if (!choice2) return;
    checkCards();
    setTurns((prevTurns) => prevTurns + 1);
    // if winner, stopTimers();
  }, [choice2]);

  return (
    <Container>
      <h1>Memory Match</h1>
      <p>
        Cards are facedown in a grid pattern. Select 2 cards to flip them
        faceup. If they match, they are removed from play, else they are flipped
        facedown again.
        <br />
        <strong>Goal:</strong> <em>Remove all cards from play.</em>
      </p>
      <p>Select a Grid Size and hit Start to play!</p>
      <Button color="primary" onClick={startGame}>
        New Game
      </Button>
      {cards.length > 0 && <p>Turn: {turns}</p>}
      {cards.length > 0 && !cards.find((card) => !card.matched) && (
        <p>YOU WIN! It took you {turns} moves.</p>
      )}
      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={handleClick}
            isFaceup={card.matched || [choice1, choice2].includes(card)}
          />
        ))}
      </div>
    </Container>
  );
};

export default CardsList;
