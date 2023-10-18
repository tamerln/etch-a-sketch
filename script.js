const container = document.querySelector("#container");

for (let i = 1; i < 16; i++) {
let rows = document.createElement('div');
rows.classList.add('rows');
container.appendChild(rows);
    for (let j = 0; j < 16; j++) {
        let cells = document.createElement('div');
        rows.appendChild(cells);
        cells.classList.add('cells');
        document.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = 'yellow';
            })
    }
}
