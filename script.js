
let selectedCard1 = null;
let selectedCard2 = null;
let cardMatchCount = 0;
let halfGridSize = 0;
let isWin = false;
let isLockedBoard = false;

let moveCount = 0;
const moveCountSpan = document.querySelector("#move-count");

/**
 * @type {HTMLSelectElement}
 */
const selectGrid = document.querySelector("#select-grid-size");
const startBtn = document.querySelector("#start");
const grid = document.querySelector("#card-grid");

startBtn.addEventListener("click", startGame);

function resetGame() {
    selectedCard1 = null;
    selectedCard2 = null;
    cardMatchCount = 0;
    halfGridSize = 0;
    isWin = false;
    isLockedBoard = false;

    moveCount = 0;
    moveCountSpan.textContent = moveCount;

    grid.innerHTML = null;
}

function startGame() {
    resetGame();
    const [x, y] = selectGrid.value.split("x");
    halfGridSize = (x * y) / 2;
    const gridRows = createCustomGrid(x, y);
    gridRows.forEach(row => {
        grid.appendChild(row);
    });
}

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
            const card = createDomFacedownCard(cardId, cards[cardIndex]);
            const faceupCard = createDomFaceupCard(cardId, cards[cardIndex]);
            cardIndex++;
            col.appendChild(card);
            col.appendChild(faceupCard);
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
    elem.style.margin = "auto";
    return elem;
}

function createDomFacedownCard(id, value) {
    // <img src="card-back.png" class="img-fluid" id="card-1" alt="facedown card">
    const elem = document.createElement("img");
    elem.style.display = "block";
    elem.src = "card-back.png";
    elem.className = "img-fluid";
    elem.id = id;
    elem.alt = "facedown card";
    elem.cardNumber = value;
    elem.style.margin = "auto";
    elem.onclick = flipCard;
    return elem;
}

function createDomFaceupCard(id, value) {
    // <div style="display: none;" id="card-1" alt="faceup card">
    const elem = document.createElement("div");
    elem.style.display = "none";
    elem.style.border = "1px solid black";
    elem.id = id;
    elem.alt = "faceup card";
    elem.textContent = value;
    elem.style.fontSize = "8em";
    elem.style.textAlign = "center";
    return elem;
}

function showCard(card) {
    card.style.display = "none";
    card.nextElementSibling.style.display = "block";
    card.nextElementSibling.style.border = "1px solid blue";
}

function hideCards() {
    selectedCard1.style.display = "block";
    selectedCard2.style.display = "block";
    selectedCard1.nextElementSibling.style.display = "none";
    selectedCard2.nextElementSibling.style.display = "none";
    selectedCard1 = null;
    selectedCard2 = null;
    isLockedBoard = false;
}

function checkCards() {
    if (selectedCard1.cardNumber === selectedCard2.cardNumber) {
        selectedCard1.nextElementSibling.style.border = "1px solid black";
        selectedCard2.nextElementSibling.style.border = "1px solid black";
        cardMatchCount++;
        selectedCard1 = null;
        selectedCard2 = null;
    } else {
        isLockedBoard = true;
        setTimeout(hideCards, 1000);
    }
}

function flipCard(e) {
    if (isLockedBoard) return;
    const self = e.currentTarget;
    showCard(self);

    if (!selectedCard1) {
        selectedCard1 = self;
        return;
    }
    selectedCard2 = self;

    moveCount++;
    moveCountSpan.textContent = moveCount;

    checkCards();

    isWin = checkWinCondition();
    if (isWin) {
        grid.innerHTML = null;
        grid.textContent = `YOU WIN! It took you ${moveCount} moves.`;
    }
}

function checkWinCondition() {
    // win early if only 2 cards remain
    return (cardMatchCount < halfGridSize - 1) ? false : true;
}
