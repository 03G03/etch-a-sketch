function generateGrid(grid) {
    styleTag.textContent = `.flexgrid { flex-basis: calc(100% / ${grid});}`;
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
            grid.removeAttribute("style");
            grid.classList.add("black");
        });
    });
}
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `${r}, ${g}, ${b}`;
}

const mainContainer = document.querySelector(".main-container");
const styleTag = document.createElement("style");

const resizeBtn = document.querySelector("#resize-btn");
const clearBtn = document.querySelector("#clear-btn");
const rainbowBtn = document.querySelector("#rainbow-btn");
const blackBtn = document.querySelector("#black-btn");

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
        grid.removeAttribute("style");
    });
});
rainbowBtn.addEventListener("click", () => {
    div.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            const RGB = randomColor();
            grid.classList.remove("black");
            grid.setAttribute("style", `background-color: rgb(${RGB});`);
        });
    });
});
blackBtn.addEventListener("click", () => {
    blackPen();
});