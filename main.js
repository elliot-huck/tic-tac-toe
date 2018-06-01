

const createBoard = () => {
  for (let i = 1; i <= 9; i++) {
    const square = document.createElement("div");
    square.id = `${i}`;
    square.innerHTML = `${i}`;
  }

}