import Card from "./Card";
import { Container } from "reactstrap";
import { useEffect, useState } from "react";

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
  const [openCards, setOpenCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const startGame = () => {
    const shuffledCards = shuffle(cardData).map((card, idx) => ({
      ...card,
      id: idx,
    }));
    setCards(shuffledCards);
    setTurns(0);
  };

  function checkCards() {
    console.log(`Comparing: ${choice1.value} vs ${choice2.value}`);
    if (choice1.value === choice2.value) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.value === choice1.value) {
            return { ...card, matched: true };
          }
          return card;
        });
      });
      // cardMatchCount++;
    } else {
      // isLockedBoard = true;
      // setTimeout(hideCards, 1000);
    }
  }

  function resetTurn() {
    setChoice1(null);
    setChoice2(null);
    setTurns((prevTurns) => prevTurns + 1);
  }

  // function hideCards() {
  //   card1.style.display = "block";
  //   card2.style.display = "block";
  //   card1.nextElementSibling.style.display = "none";
  //   card2.nextElementSibling.style.display = "none";
  //   card1 = null;
  //   card2 = null;
  //   isLockedBoard = false;
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

  function handleClick(card) {
    // if (isLockedBoard) return;
    !choice1 ? setChoice1(card) : setChoice2(card);
  }

  // compare selected cards
  useEffect(() => {
    if (!choice2) return;
    checkCards();
    resetTurn();
    // checkWinCondition();
  }, [choice2]);

  console.table(cards);

  return (
    <Container>
      <button onClick={startGame}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <Card key={card.id} card={card} onCardClick={handleClick} />
        ))}
      </div>
    </Container>
  );

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
};

export default CardsList;
