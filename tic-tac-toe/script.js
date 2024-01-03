const cells = document.querySelectorAll("[data-cell]");
const resetButton = document.querySelectorAll("[data-reset]");
const gameOverModal = document.querySelector(".modal");
const winnerText = document.querySelector(".modal h2");

let currentPlayer = "X";
const boardArray = ["", "", "", "", "", "", "", "", ""];

resetButton.forEach((reset) => {
  reset.addEventListener("click", () => {
    location.reload();
    gameOverModal.style.display = "none";
  });
});
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function gameFunctionality(index) {
  boardArray[index] = currentPlayer;

  let someHasWon = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    let newarr = [];
    for (let j = 0; j < winningCombinations[i].length; j++) {
      newarr.push(boardArray[winningCombinations[i][j]]);
    }
    if (newarr[0] && newarr[1] && newarr[2]) {
      if (newarr[0] === newarr[1] && newarr[1] === newarr[2]) {
        someHasWon = true;
      }
    }

    if (someHasWon) {
      gameOverModal.style.display = "flex";
      winnerText.textContent =
        "player" + " " + currentPlayer + " " + "is the winner!!!";
    }
    if (!boardArray.includes("") && !someHasWon) {
      gameOverModal.style.display = "flex";
      winnerText.textContent = "It's a TIE";
    }
  }
}

cells.forEach((cell, i) => {
  cell.addEventListener("click", () => {
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    if (currentPlayer === "X") {
      gameFunctionality(i);
    } else {
      gameFunctionality(i);
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});
