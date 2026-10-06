const mainContainer = document.querySelector(".main-container");
for (let i = 1; i <= 16*16; i++) {
    const div = document.createElement("div");
    div.textContent = `div ${i}`;
    div.classList.add("grid");
    mainContainer.appendChild(div);
}