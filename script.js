
function createUniqueCards(gridSize) {
    const halfGrid = gridSize / 2;
    const uniqueCards = [];
    for (let i = 0; i < halfGrid; i++) {
        uniqueCards.push(i + 1);
    }
    return uniqueCards;
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
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

function createCustomGrid(rowCardLen, colCardLen) {
    const gridSize = rowCardLen * colCardLen;
    const rowCardLimit = 12;
    const colCardLimit = 6;
    if (rowCardLen > rowCardLimit) {
        console.error(`Row can only have ${rowCardLimit} cards max`);
        return;
    }
    if (colCardLen > colCardLimit) {
        console.error(`Column can only have ${colCardLimit} cards max`);
        return;
    }
    if (gridSize % 2 !== 0) {
        console.error("Grid cannot have an odd number of cards");
        return;
    }
    const uniqueCards = createUniqueCards(gridSize);
    const pairCards = uniqueCards.concat(uniqueCards);
    const cards = shuffle(pairCards);

    const rows = [];
    let cardIndex = 0;
    for (let row = 0; row < colCardLen; row++) {
        // create html row
        const row = createDomRow();
        for (let col = 0; col < rowCardLen; col++) {
            // create html col & create/append card
            const col = createDomCol();
            const cardId = "card-" + (cardIndex + 1);
            const card = createDomCard(cardId, cards[cardIndex]);
            cardIndex++;
            col.appendChild(card);
            row.appendChild(col);
        }
        rows.push(row);
    }
    return rows;
}

function createDomRow() {
    // <div class="row">
    const elem = document.createElement("div");
    elem.className = "row";
    return elem;
}

function createDomCol() {
    // <div class="col">
    const elem = document.createElement("div");
    elem.className = "col";
    return elem;
}

function createDomCard(id, value) {
    // <img src="card-back.png" class="img-fluid" id="card-1" alt="facedown card">
    const elem = document.createElement("img");
    elem.src = "card-back.png";
    elem.className = "img-fluid";
    elem.id = id;
    elem.alt = "facedown card";
    elem.cardNumber = value;
    elem.onclick = clickLogic;
    return elem;
}

function clickLogic(e) {
    const self = e.currentTarget;
    self.style.visibility = "hidden";
    // self.nextElementSibling.style.visibility = "visible";

    if (!selectedCard1) {
        selectedCard1 = self;
        return;
    }
    selectedCard2 = self;

    // compare cards
    if (selectedCard1.cardNumber === selectedCard2.cardNumber) {
        alert(`Cards ${selectedCard1.cardNumber} and ${selectedCard2.cardNumber} match!`);
        // remove click logic, card image
        selectedCard1.style.visibility = "hidden";
        selectedCard2.style.visibility = "hidden";
        selectedCard1.removeEventListener("click", clickLogic);
        selectedCard2.removeEventListener("click", clickLogic);
        cardMatchCount++;
    } else {
        alert(`Cards ${selectedCard1.cardNumber} and ${selectedCard2.cardNumber} don't match.`);
        // flip cards facedown
        selectedCard1.style.visibility = "visible";
        selectedCard2.style.visibility = "visible";
        // selectedCard1.nextElementSibling.style.visibility = "hidden";
        // selectedCard2.nextElementSibling.style.visibility = "hidden";
    }

    selectedCard1 = null;
    selectedCard2 = null;

    isWin = checkWinCondition();
    if (isWin) {
        // change alert to win message
        alert("You won!");
        resetGame();
    }
}

function checkWinCondition() {
    // win early if only 2 cards remain
    return (cardMatchCount < halfGridSize - 1) ? false : true;
}

function resetGame() {
    // reset globals and grid
    selectedCard1 = null;
    selectedCard2 = null;
    cardMatchCount = 0;
    halfGridSize = 0;
    isWin = false;

    grid.innerHTML = null;
}

let selectedCard1 = null;
let selectedCard2 = null;
let cardMatchCount = 0;
let halfGridSize = 0;
let isWin = false;

/**
 * @type {HTMLSelectElement}
 */
const selectGrid = document.querySelector("#select-grid-size");
const grid = document.querySelector("#card-grid");
selectGrid.addEventListener("change", (e) => {
    resetGame();
    const [x, y] = e.currentTarget.value.split("x");
    halfGridSize = (x * y) / 2;
    const gridRows = createCustomGrid(x, y);
    gridRows.forEach(row => {
        grid.appendChild(row);
    });
});
