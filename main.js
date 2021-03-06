const order = [8, 3, 4, 1, 5, 9, 6, 7, 2];
let currentPlayerToken;
let turnCounter = 1;


const createBoard = () => {
  const board = document.querySelector("#board");
  for (let i = 1; i <= 9; i++) {
    const square = document.createElement("div");
    square.id = `${i}`;
    square.innerHTML = `${i}`;
    board.appendChild(square);
  }

}

const reorderBoard = () => {
  let orderCounter = 1;
  for (let i = 1; i <= 9; i++) {
    let currentBoxID = order[i-1];
    // console.log(document.querySelector("#board").innerHTML);
    let currentBox = document.getElementById(currentBoxID);
    let newBoxOrder = "" + i;
    currentBox.style.order = newBoxOrder;
    currentBox.addEventListener("mouseup", fillSquare);
  }
}

createBoard();
reorderBoard();

const getPlayer = () => {
  if (turnCounter % 2 === 1) {
    return "X";
  } else {
    return "O";
  }
}

function fillSquare() {
  // console.log(this.innerHTML);
  currentPlayerToken = getPlayer();
  this.innerHTML = `${currentPlayerToken}`;
  this.style.color = "black";
  turnCounter++;
  console.log(turnCounter);
  this.removeEventListener("mouseup", fillSquare);
  // console.log(this.innerHTML);
}

// const xoListener = () => {
//   for (let i = 1; i <= 9; i++) {
//     let currentBoxID = "" + i;
//     let currentBox = document.getElementById(currentBoxID)
    
//   }
// }

// xoListener();