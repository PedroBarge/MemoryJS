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

let gameBoard = ["", "", "", "", "", "", "", "", ""];

function renderBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 20; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    cell.textContent = gameBoard[i];
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  const index = event.target.dataset.index;

  if (gameBoard[index] === "") {
    gameBoard[index];
    renderBoard();
  }
}

renderBoard();
