import CardBack from "../../assets/img/card-back.png";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, onCardClick }) => {
  const { value } = card;
  const [isFaceup, setIsFaceup] = useState(false);

  function handleClick() {
    setIsFaceup(!isFaceup);
    onCardClick(card);
  }

  return (
    <ReactCardFlip isFlipped={isFaceup} flipDirection="horizontal">
      <img
        src={CardBack}
        className="img-fluid facedown-card"
        alt="facedown card"
        onClick={handleClick}
      />
      <div alt="faceup card" className="faceup-card selected-card">
        {value}
      </div>
    </ReactCardFlip>
  );
};

export default Card;
