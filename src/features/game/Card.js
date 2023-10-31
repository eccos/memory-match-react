import CardBack from "../../assets/img/card-back.png";
import { useState } from "react";

const Card = ({ id, value }) => {
  const [isFaceup, setIsFaceup] = useState(false);

  function handleClick() {
    setIsFaceup(true);
  }

  // function showCard(card) {
  //   card.style.display = "none";
  //   card.nextElementSibling.style.display = "block";
  //   card.nextElementSibling.style.border = "1px solid blue";
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

  // function createDomFacedownCard(id, value) {
  //   // <img src="card-back.png" class="img-fluid" id="card-1" alt="facedown card">
  //   // const elem = document.createElement("img");
  //   elem.src = "card-back.png";
  //   elem.className = "img-fluid";
  //   elem.alt = "facedown card";
  //   elem.id = id;
  //   elem.cardNumber = value;
  //   elem.onclick = flipCard;
  //   elem.style.display = "block";
  //   elem.style.margin = "auto";
  //   return elem;
  // }

  // function createDomFaceupCard(id, value) {
  //   // <div style="display: none;" id="card-1" alt="faceup card">
  //   const elem = document.createElement("div");
  //   elem.alt = "faceup card";
  //   elem.id = id;
  //   elem.textContent = value;
  //   elem.style.display = "none";
  //   elem.style.border = "1px solid black";
  //   elem.style.fontSize = "8em";
  //   elem.style.textAlign = "center";
  //   return elem;
  // }

  return isFaceup ? (
    <div alt="faceup card" id={id}>
      {value}
    </div>
  ) : (
    <img
      src={CardBack}
      className="img-fluid"
      alt="facedown card"
      id={id}
      onClick={handleClick}
    />
  );
};

export default Card;
