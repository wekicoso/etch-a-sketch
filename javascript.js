const container = document.querySelector("#container");
const btnSubmit = document.querySelector("button");
const inputText = document.querySelector(".input");
inputText.placeholder = "max 100";

// Creating grid and adding clases to fields
function createGrid(gridSize) {
    container.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.classList.add("column");
            row.appendChild(div);
        }
        container.appendChild(row);
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

function inputIsValid(text) {
    if (Number.isInteger(+text)) {
        if (+text > 0 && +text <= 100) {
            return true;
        }
    }
    return false;
}

inputText.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        btnSubmit.click();
    }
});

btnSubmit.addEventListener('click', (e) => {
    const input = inputText.value;

    if (inputIsValid(input)) {
        createGrid(input);
    } else {
        inputText.value = "";
        inputText.placeholder = "max 100";
    }

    inputText.select();
});

createGrid(16);