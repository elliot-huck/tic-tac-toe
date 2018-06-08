const order = [8, 3, 4, 1, 5, 9, 6, 7, 2];
let currentPlayerToken;
let turnCounter = 1;
const playerX = [];
const playerO = [];
let currentPlayer;
let winner = false;

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

const clearListeners = () => {
  const allSquares = document.querySelectorAll("#board > div");
  allSquares.forEach(a => {
    a.removeEventListener("mouseup", takeTurn);
  });
}

// Updates the status bar to show whose turn it is
const showStatus = () => {
  const header = document.querySelector("#status");
  header.textContent = `It is ${currentPlayerToken}'s turn`;
}

const showWinner = () => {
  const header = document.querySelector("#status");
  header.textContent = `${currentPlayerToken} wins! `;

  const replayLink = document.createElement("a");
  replayLink.href = "index.html";
  replayLink.textContent = "Click here to play again"
  replayLink.style.color = "blue";
  // replayLink.style.textDecoration = "none";
  header.appendChild(replayLink);

  let board = document.querySelector("#board");
  board.style.opacity = "0.15";
  clearListeners();
}

createBoard();
reorderBoard();
currentPlayerToken = getPlayer();
showStatus();

const checkWinner = () => {
  if (currentPlayer.length >= 3) {
    console.log(currentPlayer);
    currentPlayer.forEach(a => {
      currentPlayer.forEach(b => {
        currentPlayer.forEach(c => {
          if (a + b + c === 15 && a !== b && b !== c && a !== c) {
            // console.log(a + b + c);
            winner = true;
          }
        })
      })
    })
  }
}

// Runs when an empty square is clicked
function takeTurn() {

  // Extracts the squareValue and pushes it to the currentPlayer's array
  squareValue = parseInt(this.textContent);
  console.log(`Value clicked: ${squareValue}`);
  currentPlayer.push(squareValue);

  // Fills the square with the currentPlayer's token
  this.innerHTML = `${currentPlayerToken}`;
  this.style.color = "black";

  // Checks if there is a winner and, if so, displays the win message
  // Otherwise, it moves to the next turn
  checkWinner();
  if (winner) {
    showWinner();
    // console.log("There is a winner")
  } else {

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

}



// const xoListener = () => {
//   for (let i = 1; i <= 9; i++) {
//     let currentBoxID = "" + i;
//     let currentBox = document.getElementById(currentBoxID)

//   }
// }

// xoListener();