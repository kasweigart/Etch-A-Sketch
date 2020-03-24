let container = document.querySelector(".container");
let clearGridBtn = document.querySelector(".clearGrid");

clearGridBtn.addEventListener('click', clearGrid);


function createGrid(size) {
    for (i=0; i<size; i++) {
        let createRow = document.createElement('div');
        createRow.classList.add('grid-row');
        for (x=0; x< size; x++) {
            let createCell = document.createElement('div');
            createCell.classList.add('grid-cell');
            createCell.innerText = 'test';
            createRow.appendChild(createCell);
        }
    container.appendChild(createRow);
    }
    
}

function clearGrid() {
    prompt('Enter your new grid size. (16-128)');
}

createGrid(16);