const board = document.getElementById("board");
let images = [
  "Images/BarMinder.png",
  "Images/BatMinder.png",
  "Images/CowMinder.png",
  "Images/FuzzyMinder.png",
  "Images/AutumnMinder.png",
  "Images/Bigodes.png",
  "Images/MinderGamer.png",
  "Images/FemaleMinder.png",
  "Images/GentlemanMinder.png",
  "Images/MinderBiker.png",
];
images = images.concat(images);

let cardsObjct = [
  {
    id: 1,
    name: "BarMinder",
    imageFront: "Images/BarMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 2,
    name: "BatMinder",
    imageFront: "Images/BatMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 3,
    name: "CowMinder",
    imageFront: "Images/CowMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 4,
    name: "FuzzyMinder",
    imageFront: "Images/FuzzyMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 5,
    name: "AutumnMinder",
    imageFront: "Images/AutumnMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 6,
    name: "Bigodes",
    imageFront: "Images/Bigodes.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 7,
    name: "MinderGamer",
    imageFront: "Images/MinderGamer.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 8,
    name: "FemaleMinder",
    imageFront: "Images/FemaleMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 9,
    name: "GentlemanMinder",
    imageFront: "Images/GentlemanMinder.png",
    imageBack: "Images/cardBack.webp",
  },
  {
    id: 10,
    name: "MinderBiker",
    imageFront: "Images/MinderBiker.png",
    imageBack: "Images/cardBack.webp",
  },
];

cardsObjct = cardsObjct.concat(cardsObjct);
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

cardsObjct = shuffle(cardsObjct);

let gameBoard = ["", "", "", "", "", "", "", "", ""];

function renderBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;

    const img = document.createElement("img");
    img.src = cardsObjct[i].imageBack;

    cell.appendChild(img);

    cell.addEventListener("click", handleCellClick);

    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  const index = event.currentTarget.dataset.index;
  console.log("entrou no handleCellClick");
  const currentCard = cardsObjct[index];

  if (gameBoard[index] === currentCard.imageBack) {
    const img = event.currentTarget.querySelector("img");

    if (img.src.includes(currentCard.imageBack)) {
      img.src = currentCard.imageFront; 
      console.log("entrou on if");
    } else {
      img.src = currentCard.imageBack; 
      console.log("entrou no else");
    }
  }
  console.log("saiu do handleCellClick");
}

renderBoard();
