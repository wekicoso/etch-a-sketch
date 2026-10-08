const container = document.querySelector("#container");

// Creating grid and adding clases to fields
function createGrid(element) {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 16; j++) {
            const div = document.createElement("div");
            div.classList.add("column");
            row.appendChild(div);
        }
        element.appendChild(row);
    }
}

// function for eventListener
function hover(event) {
    if (event.target.classList.contains('column')) {
           event.target.classList.add('highlight');
    }
}

createGrid(container);

// Event delegation - by using event.target we are highlighting targeted field
container.addEventListener('mouseover', hover);