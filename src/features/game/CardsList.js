import Card from "./Card";
import { Row, Col } from "reactstrap";
import { useState } from "react";

const CardsList = () => {
  const rows = 2;
  const cols = 3;
  const gridSize = rows * cols;
  const halfGrid = gridSize / 2;

  const [cards, setCards] = useState(createUniqueCards(gridSize));
  const { id, value } = { id: 1, value: 1 };

  return Array.from({ length: rows }, (_, rowIndex) => (
    <Row key={rowIndex}>
      {Array.from({ length: cols }, (_, colIndex) => (
        <Col key={colIndex} id={`card-${rowIndex * cols + colIndex + 1}`}>
          <Card id={id} value={value} />
        </Col>
      ))}
    </Row>
  ));

  function createUniqueCards(gridSize) {
    const halfGrid = gridSize / 2;
    const uniqueCards = [];
    for (let i = 0; i < halfGrid; i++) {
      uniqueCards.push(i + 1);
    }
    return uniqueCards;
  }

  // function createDomCol() {
  //   // <div class="col">
  //   const elem = document.createElement("div");
  //   elem.className = "col";
  //   elem.style.margin = "auto";
  //   return elem;
  // }

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
