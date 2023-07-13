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
  const boardSize = 9;
  drawBoard(boardSize);
  let firstPlayerTurn = true;
  function currentClass(firstPlayerTurn) {
    return firstPlayerTurn ? "p1-box" : "p2-box";
  }
  currentClass(firstPlayerTurn);

  function fourSeasonsRecursion(i, j, thisOne) {
    let thisElement = document.getElementById(`d-${i}-${j}`);
    let elUpper = thisElement,
      elLower = thisElement,
      elLeft = thisElement,
      elRight = thisElement;
    if (i !== 0) elUpper = document.getElementById(`d-${i - 1}-${j}`);
    if (i !== boardSize - 1)
      elLower = document.getElementById(`d-${i + 1}-${j}`);
    if (j !== 0) elLeft = document.getElementById(`d-${i}-${j - 1}`);
    if (j !== boardSize - 1)
      elRight = document.getElementById(`d-${i}-${j + 1}`);
    if (
      (elUpper.classList.contains(thisOne) || i === 0) &&
      (elLower.classList.contains(thisOne) || i === boardSize - 1) &&
      (elLeft.classList.contains(thisOne) || j === 0) &&
      (elRight.classList.contains(thisOne) || j === boardSize - 1)
    ) {
      thisElement.innerText = ".";
    }
  }

  const box = document.querySelectorAll("td");
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      let td = box[i * 9 + j];
      let tdUpper = td,
        tdLower = td,
        tdLeft = td,
        tdRight = td;
      if (i !== 0) tdUpper = box[(i - 1) * 9 + j];
      if (i !== boardSize - 1) tdLower = box[(i + 1) * 9 + j];
      if (j !== 0) tdLeft = box[i * 9 + (j - 1)];
      if (j !== boardSize - 1) tdRight = box[i * 9 + (j + 1)];
      td.addEventListener("click", () => {
        let thisOne = currentClass(firstPlayerTurn);
        let notThisOne = currentClass(!firstPlayerTurn);
        if (td.innerText === "#") {
          return;
        } else if (
          (tdUpper.classList.contains(notThisOne) || i === 0) &&
          (tdLower.classList.contains(notThisOne) || i === boardSize - 1) &&
          (tdLeft.classList.contains(notThisOne) || j === 0) &&
          (tdRight.classList.contains(notThisOne) || j === boardSize - 1)
        ) {
          return;
        } else {
          td.innerText = "#";
          td.classList.add(thisOne);
          if (i !== 0) fourSeasonsRecursion(i - 1, j, thisOne);
          if (i !== boardSize - 1) fourSeasonsRecursion(i + 1, j, thisOne);
          if (j !== 0) fourSeasonsRecursion(i, j - 1, thisOne);
          if (j !== boardSize - 1) fourSeasonsRecursion(i, j + 1, thisOne);
          firstPlayerTurn = !firstPlayerTurn;
        }
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", play);
