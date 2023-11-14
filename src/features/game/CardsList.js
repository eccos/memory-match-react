import Card from "./Card";
import { Row, Col } from "reactstrap";
import { useState } from "react";

const CardsList = () => {
  const rowCount = 2;
  const colCount = 3;
  const gridSize = rowCount * colCount;

  const [cards, setCards] = useState(createUniqueCards(gridSize));

  return Array.from({ length: rowCount }, (_, rowIdx) => {
    return (
      <Row key={rowIdx}>
        {Array.from({ length: colCount }, (_, colIdx) => {
          let cardIdx = rowIdx * colCount + colIdx;
          return (
            <Col key={colIdx} id={`card-${cardIdx + 1}`}>
              <Card id={cardIdx} value={cards[cardIdx]} />
            </Col>
          );
        })}
      </Row>
    );
  });

  function createUniqueCards(gridSize) {
    const halfGrid = gridSize / 2;
    const uniqueCards = [];
    for (let i = 0; i < halfGrid; i++) {
      uniqueCards.push(i + 1);
    }
    const pairCards = uniqueCards.concat(uniqueCards);
    const cards = shuffle(pairCards);
    return cards;
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
