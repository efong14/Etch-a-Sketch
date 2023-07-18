const container = document.querySelector(".container");



function creategrid(width) {
 for (let i = 0; i <= width; i++) {
    const createBox = document.createElement("div");
    createBox.textContent = `${i}`;
    createBox.classList.add("gridCube");
    container.appendChild(createBox);
 }
};

creategrid (16)