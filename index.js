//object to save game board marks data
let cellMark = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
};

//current active marks
let activeMark = "X";

//function when clicking game board cell
const clickCell = (index) => {
  //select game board in html (all cell)
  const gameBoard = document.querySelectorAll(".cell");

  console.log();

  //marking game board -- only if the cell was empty before
  if (gameBoard[index - 1].innerHTML === "") {
    //if activeMark = X
    if (activeMark === "X") {
      activeMark = "O";
      gameBoard[index - 1].innerHTML = "X";
      cellMark[`${index - 1}`] = "X";
    }

    //if activeMark = O
    else {
      activeMark = "X";
      gameBoard[index - 1].innerHTML = "O";
      cellMark[`${index - 1}`] = "O";
    }
  }

  //HORIZONTAL WIN
  //0-1-2
  //3-4-5
  //6-7-8
  for (let k = 0; k < 7; k += 3) {
    for (let i = k; i < k + 3; i++) {
      if (
        cellMark[`${i}`] === cellMark[`${i + 1}`] &&
        cellMark[`${i + 1}`] === cellMark[`${i + 2}`] &&
        cellMark[`${i}`] != ""
      ) {
        for (let j = k; j < k + 3; j++) {
          gameBoard[j].classList.add("win");
        }
      }
    }
  }

  //VERTICAL WIN
  //0-3-6
  //1-4-7
  //2-5-8
  for (let k = 0; k < 3; k++) {
    for (let i = k; i < k + 7; i += 3) {
      if (
        cellMark[`${i}`] === cellMark[`${i + 3}`] &&
        cellMark[`${i + 3}`] === cellMark[`${i + 6}`] &&
        cellMark[`${i}`] != ""
      ) {
        for (let j = k; j < k + 7; j += 3) {
          gameBoard[j].classList.add("win");
        }
      }
    }
  }

  //DIAGONAL
  //0-4-8
  if (
    cellMark[`0`] === cellMark[`4`] &&
    cellMark[`4`] === cellMark[`8`] &&
    cellMark[`0`] != ""
  ) {
    for (let j = 0; j < 9; j += 4) {
      gameBoard[j].classList.add("win");
    }
  }
  //2-4-6
  if (
    cellMark[`2`] === cellMark[`4`] &&
    cellMark[`4`] === cellMark[`6`] &&
    cellMark[`2`] != ""
  ) {
    for (let j = 2; j < 7; j += 2) {
      gameBoard[j].classList.add("win");
    }
  }
};
