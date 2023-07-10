function drawBoard(tableSize) {
  const boardElement = document.getElementById("board");
  for (let i = 0; i < tableSize; i++) {
    let rowElement = document.createElement("tr");
    rowElement.id = `r-${i}`;
    boardElement.appendChild(rowElement);
    for (let j = 0; j < tableSize; j++) {
      let dataElement = document.createElement("td");
      dataElement.id = `d-${i}-${j}`;
      dataElement.innerText = ".";
      rowElement.appendChild(dataElement);
    }
  }
}

function play() {
  const tableSize = 9;
  drawBoard(tableSize);
  currentTurn = "blue-box";

  const box = document.querySelectorAll("td");
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      let dataElement = box[i * 9 + j];
      dataElement.addEventListener("click", () => {
        if (dataElement.innerText === "*") {
          return;
        } else {
          dataElement.innerText = "*";
          dataElement.className = currentTurn;
          currentTurn = currentTurn === "blue-box" ? "red-box" : "blue-box";
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", play);
