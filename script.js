let gridElement;
let gridDmension;
let isMouseDown = false;

const grid = document.querySelector(".grid");
const eraseButton = document.querySelector(".eraseButton");
const changeGridSizeButton = document.querySelector(".changeGridSizeButton");

function createNewGrid() {
    gridDimension = prompt("Enter grid width (must be under 64): ");
    while(isNaN(gridDimension) || gridDimension > 64 || gridDimension < 1) {
        alert("Given value is not a number or is too high (must be under 64).\nClick OK to try again.");
        gridDimension = prompt("Enter grid width (must be under 64): ");
    }

    for (i = 1; i <= (gridDimension * gridDimension); i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("gridElement");

        squareDimension = 640 / gridDimension + "px";

        gridElement.style["width"] = squareDimension;
        gridElement.style["height"] = squareDimension;
        gridElement.style["outline"] = "solid 1px #f1e9da";
        gridElement.style["backgroundColor"] = "#ffffff";

        grid.appendChild(gridElement);
        gridEventListeners(gridElement);
    }
}

function setDefaultGridColors() {    
    const allGridElements = document.querySelectorAll(".gridElement");
    gridElementsAmount = allGridElements.length;

    for (i = 0; i <= gridElementsAmount-1; i++) {
        allGridElements[i].style["outline"] = "solid 1px #f1e9da";
        allGridElements[i].style["backgroundColor"] = "#ffffff";
    }
}

function gridEventListeners(gridElement) {
    document.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    document.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    gridElement.addEventListener("mouseover", () => {
        if (isMouseDown) {
            gridElement.style["backgroundColor"] = "#303030";
            gridElement.style["outline"] = "solid 1px #303030";
        }
    });

    gridElement.addEventListener("mousedown", () => {
        gridElement.style["backgroundColor"] = "#303030";
        gridElement.style["outline"] = "solid 1px #303030";
    });
}

changeGridSizeButton.addEventListener("click", () => {
    grid.innerHTML = "";
    createNewGrid();
});

eraseButton.addEventListener("click", () => {
    setDefaultGridColors();
});

createNewGrid();
