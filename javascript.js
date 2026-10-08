const container = document.querySelector("#container");

// Creating grid and adding clases to fields
function createGrid(element) {
    for (let i = 0; i < 100; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 100; j++) {
            const div = document.createElement("div");
            div.classList.add("column");
            row.appendChild(div);
        }
        element.appendChild(row);
    }

    // function for eventListener
    function hover(event) {
        if (event.target.classList.contains('column')) {
            event.target.classList.add('highlight');
        }
    }

    // Event delegation - by using event.target we are highlighting targeted field
    container.addEventListener('mouseover', hover);
}

createGrid(container);