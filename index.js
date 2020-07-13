const container = document.getElementById("container");
// let promptSize = prompt("Choose a number between 2 and 64");
let promptSize  = 8;
gridSize = promptSize * promptSize;
const str_fr = "1fr ";
let temp_columns = str_fr.repeat(promptSize);

makeGrid();
hoverBlack();

function makeGrid(){
    for (let i = 0; i < gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    container.style.gridTemplateColumns = temp_columns;
}

function hoverBlack(){
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener("mouseover", event => {
            item.classList.add("cell_black");
        })
    })
}

