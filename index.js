const grid = document.querySelector(".grid")
let grid_size = 256;

let i = 0;
while (i < grid_size) {
    let tile = document.createElement("div");
    tile.classList.add("tile_default");
    grid.appendChild(tile);
    i += 1;
}

// fix grid layout