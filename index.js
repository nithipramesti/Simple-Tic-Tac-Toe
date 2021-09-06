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

//game status
let playingGame = true;

//function when clicking game board cell
const clickCell = (index) => {
  //select game board in html (all cell)
  const gameBoard = document.querySelectorAll(".cell");

  //marking game board
  //only if the cell was empty before & 'playingGame' is true
  if (playingGame) {
    if (gameBoard[index - 1].innerHTML === "") {
      //if activeMark = X
      if (activeMark === "X") {
        activeMark = "O";
        gameBoard[index - 1].innerHTML = "&#10005";
        gameBoard[index - 1].classList.add("cross");
        cellMark[`${index - 1}`] = "X";
      }

      //if activeMark = O
      else {
        activeMark = "X";
        gameBoard[index - 1].innerHTML = "&#9675";
        cellMark[`${index - 1}`] = "O";
      }
    }
  }

  //HORIZONTAL WIN
  //0-1-2
  //3-4-5
  //6-7-8
  for (let k = 0; k < 7; k += 3) {
    if (
      cellMark[`${k}`] === cellMark[`${k + 1}`] &&
      cellMark[`${k + 1}`] === cellMark[`${k + 2}`] &&
      cellMark[`${k}`] != ""
    ) {
      for (let j = k; j < k + 3; j++) {
        gameBoard[j].classList.add("win");
        playingGame = false;
      }
    }
  }

  //VERTICAL WIN
  //0-3-6
  //1-4-7
  //2-5-8
  for (let k = 0; k < 3; k++) {
    if (
      cellMark[`${k}`] === cellMark[`${k + 3}`] &&
      cellMark[`${k + 3}`] === cellMark[`${k + 6}`] &&
      cellMark[`${k}`] != ""
    ) {
      for (let j = k; j < k + 7; j += 3) {
        gameBoard[j].classList.add("win");
        playingGame = false;
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
      playingGame = false;
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
      playingGame = false;
    }
  }
};
