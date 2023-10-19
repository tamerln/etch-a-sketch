
const container = document.querySelector("#container");
const reset = document.querySelector('#reset');
const sizeButton = document.querySelector('#size');
let size = 16;

sizeButton.addEventListener("click", function(e) {
    size = window.prompt("Enter desired size: ");
    container.innerHTML = '';
    createGrid(size);
})

function createGrid(size) {
for (let i = 1; i < size; i++) {
let row = document.createElement('div');
row.classList.add('rows');
container.appendChild(row);
    for (let j = 0; j < size; j++) {
        let cells = document.createElement('div');
        row.appendChild(cells);
        cells.classList.add('cells');
        cells.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = 'black';
            })
            reset.addEventListener("click", function(e){
                cells.style.backgroundColor = '';
            })
            
    }
}
}

createGrid(size);