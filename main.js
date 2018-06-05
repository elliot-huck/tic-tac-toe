const order = [8, 3, 4, 1, 5, 9, 6, 7, 2];
let currentPlayerToken;
let turnCounter = 1;
const playerX = [];
const playerO = [];
let currentPlayer;

// Lays out the board 1-9
const createBoard = () => {
  const board = document.querySelector("#board");
  for (let i = 1; i <= 9; i++) {
    const square = document.createElement("div");
    square.id = `${i}`;
    square.innerHTML = `${i}`;
    board.appendChild(square);
  }

}

// Reorders the board to make each tic-tac-toe equal 15 and adds the eventListeners to each square
const reorderBoard = () => {
  let orderCounter = 1;
  for (let i = 1; i <= 9; i++) {
    let currentBoxID = order[i - 1];
    // console.log(document.querySelector("#board").innerHTML);
    let currentBox = document.getElementById(currentBoxID);
    let newBoxOrder = "" + i;
    currentBox.style.order = newBoxOrder;
    currentBox.addEventListener("mouseup", takeTurn);
  }
}

// Sets currentPlayer and returns the token of the player whose turn it is
const getPlayer = () => {
  if (turnCounter % 2 === 1) {
    currentPlayer = playerX;
    return "X";
  } else {
    currentPlayer = playerO;
    return "O";
  }
}

// Updates the status bar to show whose turn it is
const showStatus = (player) => {
  const header = document.querySelector("#status");
  header.textContent = `It is ${currentPlayerToken}'s turn`;
}

createBoard();
reorderBoard();
currentPlayerToken = getPlayer();
showStatus(currentPlayerToken);



// Runs when an empty square is clicked
function takeTurn() {

  // Extracts the squareValue and pushes it to the currentPlayer's array
  squareValue = parseInt(this.textContent);
  console.log(`Value clicked: ${squareValue}`);
  currentPlayer.push(squareValue);

  // Fills the square with the currentPlayer's token
  this.innerHTML = `${currentPlayerToken}`;
  this.style.color = "black";

  // Increments the turnCounter
  turnCounter++;
  console.log(`It is now turn ${turnCounter}`);

  // Sets the currentPlayer for the upcoming turn
  currentPlayerToken = getPlayer();
  showStatus(currentPlayerToken);
  // console.log(`Current player: ${currentPlayer}`)

  // Removes the eventListener from the square
  this.removeEventListener("mouseup", takeTurn);
  // console.log(this.innerHTML);
}



// const xoListener = () => {
//   for (let i = 1; i <= 9; i++) {
//     let currentBoxID = "" + i;
//     let currentBox = document.getElementById(currentBoxID)

//   }
// }

// xoListener();