let gridElement,
    gridDmension;

gridDimension = 16; /* test value*/

const grid = document.querySelector(".grid");
const eraseButton = document.querySelector(".eraseButton");
const setGridSizeButton = document.querySelector(".setGridSizeButton");

function createGrid() {
    for (i = 1; i <= (gridDimension * gridDimension); i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridSquare");

        squareDimension = 640 / gridDimension + "px";
        gridElement.style["width"] = squareDimension;
        gridElement.style["height"] = squareDimension;
        gridElement.style["outline"] = "solid 1px #f1e9da";

        grid.appendChild(gridElement);
    }
    
}

createGrid();
