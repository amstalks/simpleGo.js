function drawBoard(tableSize) {
  //   console.info("Started drawing the board");
  const boardElement = document.getElementById("board");
  for (let i = 0; i < tableSize; i++) {
    let rowElement = document.createElement("tr");
    rowElement.id = `r-${i}`;
    boardElement.appendChild(rowElement);
    for (let j = 0; j < tableSize; j++) {
      let dataElement = document.createElement("td");
      dataElement.id = `d-${i}-${j}`;
      dataElement.innerText = '.';
      rowElement.appendChild(dataElement);
    }
  }
}

function play() {
  // console.info("DOM fully loaded and parsed");
  drawBoard(9);
}

document.addEventListener("DOMContentLoaded", play);
