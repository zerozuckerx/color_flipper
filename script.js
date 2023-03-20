// *** VARIABLES ***
const colorsSimple = ["Green", "Yellow", "Rgba(133,122,200)", "#F15025"];
const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hex = false;

// *** BUTTON ASSIGMENTS ***
const colorButton = document.getElementById("btn");

// *** FUNCTIONS ***
colorButton.addEventListener("click", () => {
  if(!hex) {
    simpleFlipper();
  }
});

function simpleFlipper() {
  const randomNumber = Math.floor(Math.random() * colorsSimple.length)
  document.body.style.backgroundColor = colorsSimple[randomNumber];
  document.querySelector(".color-name").textContent = colorsSimple[randomNumber];
}