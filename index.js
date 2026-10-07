function generateGrid(grid) {
    styleTag.textContent += `.flexgrid { flex-basis: calc(100% / ${grid});}`;
    document.head.appendChild(styleTag);
    for (let i = 1; i <= grid * grid; i++) {
        const div = document.createElement("div");
        div.classList.add("grid");
        div.classList.add("flexgrid");
        mainContainer.appendChild(div);
    };
    div = document.querySelectorAll(".grid");
    blackPen();
}
function blackPen() {
    div.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.classList.remove("rainbow");
            grid.classList.add("black");
        });
    });
}

const mainContainer = document.querySelector(".main-container");
const resizeBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector("#clear-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const blackBtn = document.querySelector("#black-btn");
const styleTag = document.createElement("style");

let div;

let grid = 16;
generateGrid(grid);

resizeBtn.addEventListener("click", () => {
    grid = prompt("enter grid size (max = 100)", "");
    if (grid > 100) {
        alert("too much!");
        grid = 16;
    }
    div.forEach(grid => {
        grid.remove();
    });
    generateGrid(grid);
});
clearBtn.addEventListener("click", () => {
    div.forEach(grid => {
        grid.classList.remove("black");
        grid.classList.remove("rainbow");
    });
});
rainbowBtn.addEventListener("click", () => {
    styleTag.textContent += `.rainbow { background-color: pink;}`;
    document.head.appendChild(styleTag);
    div.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            //math floor
            grid.classList.add("rainbow");
        });
    });
});
blackBtn.addEventListener("click", () => {
    blackPen();
});