const container = document.querySelector(".container");
const button = document.querySelector("button");


function creategrid(width, height) {
 for (let i = 1; i <= (width*height); i++) {
   const createBox = document.createElement("div");
   createBox.textContent = `${i}`;
   createBox.classList.add("gridCube");
   container.appendChild(createBox);
   createBox.addEventListener("mouseover", () => {
      createBox.classList.add ("gridHover");
   });
 };
};

creategrid (16, 16)

button.addEventListener ("click", () => {
   let change = prompt ("Change grid size to?", "16");
   creategrid (change, change)
   })

