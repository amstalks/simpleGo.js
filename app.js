function drawBoard(tableSize) {
  const boardElement = document.getElementById("board");
  for (let i = 0; i < tableSize; i++) {
    let rowElement = document.createElement("tr");
    rowElement.id = `r-${i}`;
    boardElement.appendChild(rowElement);
    for (let j = 0; j < tableSize; j++) {
      let dataElement = document.createElement("td");
      let dataElementClasses = dataElement.classList;
      dataElement.id = `d-${i}-${j}`;
      dataElement.innerText = `${i}-${j}`;
      if (i === 0) {
        dataElementClasses.add("uppermost");
      } else if (i === tableSize - 1) {
        dataElementClasses.add("lowermost");
      }
      if (j === 0) {
        dataElementClasses.add("leftmost");
      } else if (j === tableSize - 1) {
        dataElementClasses.add("rightmost");
      }
      rowElement.appendChild(dataElement);
    }
  }
}

function play() {
  const tableSize = 9;
  drawBoard(tableSize);
  firstPlayer = true;

  const box = document.querySelectorAll("td");
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      let dataElement = box[i * 9 + j];
      let dataElementClasses = dataElement.classList;
      dataElement.addEventListener("click", () => {
        if (dataElement.innerText === "*") {
          return;
        } else {
          dataElement.innerText = "*";
          let boxColor = firstPlayer ? "blue-box" : "red-box";
          dataElementClasses.add(boxColor);
          firstPlayer = !firstPlayer;
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", play);
