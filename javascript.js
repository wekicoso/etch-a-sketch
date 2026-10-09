const container = document.querySelector("#container");
const btnSubmit = document.querySelector("button");
const inputText = document.querySelector(".input");
const form = document.querySelectorAll("form input");

let choosenInput = 16;
let radioOption = "solid";

inputText.placeholder = "max 100";
inputText.select();

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
}

// function for event listener, looking for radio button selected
function hover(event) {
    if (event.target.classList.contains('column')) {
        event.target.classList.add("highlight");
        switch (radioOption) {
            case "solid":
                break;
            case "darkening":
                console.log("Pre:", event.target.style.opacity);
                event.target.style.opacity = String(Number(event.target.style.opacity) + 0.1);
                break;
            case "random":
                event.target.style.opacity = 1;
                function randomColor () {
                    return Math.floor(Math.random() * 256);
                }
                event.target.style.backgroundColor = `rgb(${randomColor()} ${randomColor()} ${randomColor()})`;
                break;
        }
    }
}

// Event delegation - by using event.target we are highlighting targeted field
container.addEventListener('mouseover', hover);

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
        choosenInput = +input;
        createGrid(choosenInput);
    } else {
        inputText.value = "";
    }

    inputText.select();
});

document.querySelector("#options > form").addEventListener('change', (e) => {
    if (e.target.type == 'radio') {
        radioOption = e.target.value;
        createGrid(choosenInput);
        inputText.select();
    }
});

createGrid(choosenInput);