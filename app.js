function drawBoard(tableSize) {
  const boardElement = document.getElementById("board");
  for (let i = 0; i < tableSize; i++) {
    let rowElement = document.createElement("tr");
    rowElement.id = `r-${i}`;
    boardElement.appendChild(rowElement);
    for (let j = 0; j < tableSize; j++) {
      let td = document.createElement("td");
      let tdClasses = td.classList;
      td.id = `d-${i}-${j}`;
      td.innerText = ".";
      if (i === 0) {
        tdClasses.add("uppermost");
      } else if (i === tableSize - 1) {
        tdClasses.add("lowermost");
      }
      if (j === 0) {
        tdClasses.add("leftmost");
      } else if (j === tableSize - 1) {
        tdClasses.add("rightmost");
      }
      rowElement.appendChild(td);
    }
  }
}

function play() {
  const tableSize = 9;
  drawBoard(tableSize);
  firstPlayer = true;
  function currentClass(firstPlayer) {
    return firstPlayer ? "blue-box" : "red-box";
  }

  const box = document.querySelectorAll("td");
  for (let i = 0; i < tableSize; i++) {
    for (let j = 0; j < tableSize; j++) {
      let td = box[i * 9 + j];
      let tdClasses = td.classList;
      let tdUpper = box[(i - 1) * 9 + j];
      let tdLower = box[(i + 1) * 9 + j];
      let tdLeft = box[i * 9 + (j - 1)];
      let tdRight = box[i * 9 + (j + 1)];
      td.addEventListener("click", () => {
        if (td.innerText === "*") {
          return;
        } else if (
          tdUpper.classList.contains(currentClass(!firstPlayer)) &&
          tdLower.classList.contains(currentClass(!firstPlayer)) &&
          tdLeft.classList.contains(currentClass(!firstPlayer)) &&
          tdRight.classList.contains(currentClass(!firstPlayer))
        ) {
          return;
        } else {
          td.innerText = "*";
          tdClasses.add(currentClass(firstPlayer));
          firstPlayer = !firstPlayer;
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", play);
