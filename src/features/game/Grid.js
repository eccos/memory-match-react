import CardsList from "./CardsList";

const Grid = () => {
  // function shuffle(array) {
  //   let currentIndex = array.length;
  //   let randomIndex;
  //   // While there remain elements to shuffle.
  //   while (currentIndex > 0) {
  //     // Pick a remaining element.
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex--;
  //     // And swap it with the current element.
  //     [array[currentIndex], array[randomIndex]] = [
  //       array[randomIndex],
  //       array[currentIndex],
  //     ];
  //   }
  //   return array;
  // }

  // function hideCards() {
  //   card1.style.display = "block";
  //   card2.style.display = "block";
  //   card1.nextElementSibling.style.display = "none";
  //   card2.nextElementSibling.style.display = "none";
  //   card1 = null;
  //   card2 = null;
  //   isLockedBoard = false;
  // }

  return <CardsList />;
};

export default Grid;
