const container = document.querySelector(".container");
const button = document.querySelector("button");

function creategrid(width, height) {
let boxWidth = 100/width;
let boxHeight = 100/height;
 for (let i = 1; i <= (width*height); i++) {
   const createBox = document.createElement("div");
   createBox.classList.add("gridCube");
   container.appendChild(createBox);
   createBox.style.width = `${boxWidth}%`;
   createBox.style.height = `${boxHeight}%`;
   createBox.addEventListener("mouseover", () => {
      createBox.classList.add ("gridHover");
   });
 };
};

button.addEventListener ("click", () => {
   let change = prompt ("Change grid size to?", "16");
   if (change <= 100) {
   container.textContent = "";
   creategrid (change, change);
   } else {
      alert("Please enter a number below 100!");
   }
});

creategrid (16, 16);
