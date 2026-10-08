const container = document.querySelector("#container");

function createGrid(element) {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add("column");
            row.appendChild(div);
            row.addEventListener('mouseover', hover);
        }
        element.appendChild(row);
    }
}

function hover(event) {
    event.target.style.backgroundColor = 'rgb(' + 135 + ',' + 179 + ',' + 245 + ')';
}

createGrid(container);