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
    div.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.classList.add("hover");
        });
    });
}
const mainContainer = document.querySelector(".main-container");
const resizeBtn = document.querySelector("#resize");
const clearBtn = document.querySelector("#clear");
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
        grid.classList.remove("hover");
    });
});