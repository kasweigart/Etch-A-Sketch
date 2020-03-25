let container = document.querySelector(".container");
let clearGridBtn = document.querySelector(".clearGrid");

clearGridBtn.addEventListener("click", clearGrid);

function createGrid(size) {
  for (i = 0; i < size; i++) {
    let createRow = document.createElement("div");
    createRow.classList.add("grid-row");
    for (x = 0; x < size; x++) {
      let createCell = document.createElement("div");
      createCell.classList.add("grid-cell");
      createRow.appendChild(createCell);
    }
    container.appendChild(createRow);
  }
  draw();
}
createGrid(16);
function draw() {
  let newCell = document.querySelectorAll(".grid-cell");
  [...newCell].forEach(cell =>
    cell.addEventListener("mouseover", () => {
      cell.className = "fill";
    })
  );
}
function clearGrid() {
  let entry = prompt("Enter your new grid size. (16-128)");
  let child = container.lastElementChild;
  while (child) {
      container.removeChild(child);
      child = container.lastElementChild;
  }
  createGrid(entry);
}
