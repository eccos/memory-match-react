import { useState, useRef, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

const Card = ({ card, onCardClick, isFaceup, isSelected, style }) => {
  const { value } = card;
  const ref = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const observer = new ResizeObserver((entries) => {
      animationFrameId = requestAnimationFrame(() => {
        ref.current.style.fontSize = `${entries[0].contentRect.width / 2}px`;
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  function handleClick() {
    onCardClick(card);
  }

  return (
    <ReactCardFlip isFlipped={isFaceup} flipDirection="horizontal">
      <div
        className="game-card facedown-card"
        onClick={handleClick}
        alt="facedown card"
        style={style}
      ></div>
      <div
        className={`game-card faceup-card ${isSelected && "selected-card"}`}
        alt="faceup card"
        style={style}
        ref={ref}
      >
        {value}
      </div>
    </ReactCardFlip>
  );
};

export default Card;
