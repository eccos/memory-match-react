import CardBack from "../../assets/img/card-back.png";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ id, value }) => {
  const [isFaceup, setIsFaceup] = useState(false);

  function handleClick(e) {
    setIsFaceup(!isFaceup);
  }

  return (
    <ReactCardFlip isFlipped={isFaceup} flipDirection="horizontal">
      <img
        src={CardBack}
        className="img-fluid facedown-card"
        alt="facedown card"
        id={id}
        onClick={handleClick}
      />
      <div
        alt="faceup card"
        className="faceup-card selected-card"
        id={id}
        onClick={handleClick}
      >
        {value}
      </div>
    </ReactCardFlip>
    // isFaceup ? (
    // <div alt="faceup card" className="faceup-card selected-card" id={id}>
    //   {value}
    // </div>
    // ) : (
    // <img
    //   src={CardBack}
    //   className="img-fluid facedown-card"
    //   alt="facedown card"
    //   id={id}
    //   onClick={handleClick}
    // />
    // );
  );

  // function createDomFaceupCard(id, value) {
  //   // <div style="display: none;" id="card-1" alt="faceup card">
  // }
  // function createDomFacedownCard(id, value) {
  //   // <img src="card-back.png" class="img-fluid" id="card-1" alt="facedown card">
  // }

  // function flipCard(e) {
  //   if (isLockedBoard) return;
  //   const self = e.currentTarget;
  //   showCard(self);

  //   if (!card1) {
  //     card1 = self;
  //     return;
  //   }
  //   card2 = self;

  //   moveCount++;
  //   moveCountSpan.textContent = `Moves: ${moveCount}`;

  //   checkCards();
  //   checkWinCondition();
  // }
};

export default Card;
