const container = document.getElementById("container");
let blackPen = document.getElementById("black_btn");
let colorPen = document.getElementById("color_btn");
let newGrid = document.getElementById("new_btn");
let clearGrid = document.getElementById("clear_btn");

makeGrid();

function makeGrid(){
    let promptSize = prompt("Number of squares per side (2-64 recommended!)");
    gridSize = promptSize * promptSize;
    const str_fr = "1fr ";
    let temp_columns = str_fr.repeat(promptSize);
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
            item.style.backgroundColor = "black";
        })
    })
}

function hoverColor(){
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener("mouseover", event => {
            let randColor = "#"+((1<<24)*Math.random()|0).toString(16);
            item.style.backgroundColor = randColor;
        })
    })
}

newGrid.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(item => {
        container.removeChild(item);
    })
    makeGrid();
})

clearGrid.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(item => {
        item.style.backgroundColor = "#f5f5f5";
    })
})

blackPen.addEventListener("click", () => {
    hoverBlack();
})

colorPen.addEventListener("click", () => {
    hoverColor();
})