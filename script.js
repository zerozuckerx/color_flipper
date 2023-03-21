// *** VARIABLES ***
const colorsSimple = ["Green", "Yellow", "Rgba(133,122,200)", "#F15025"];
const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hex = false;

// *** BUTTON ASSIGMENTS ***
const colorButton = document.getElementById("btn");
const switchSimpleButton = document.querySelector(".switchSimple");
const switchHexButton = document.querySelector(".switchHex");

// *** FUNCTIONS ***
switchSimpleButton.addEventListener("click", () => {
  hex = false;
});

switchHexButton.addEventListener("click", () => {
  hex = true;
});

colorButton.addEventListener("click", () => {
  if(!hex) {
    simpleFlipper();
  } else {
    hexFlipper();
  }
});

function simpleFlipper() {
  const randomNumber = Math.floor(Math.random() * colorsSimple.length)
  document.body.style.backgroundColor = colorsSimple[randomNumber];
  document.querySelector(".color-name").textContent = colorsSimple[randomNumber];
}

function hexFlipper() {
  const hexColor = ["#"];
  for(let i = 1; i <= 6; i++) {
    let randomHexLetter = Math.floor(Math.random() * 16);
    hexColor.push(colorsHex[randomHexLetter]);
  }
  hexString = hexColor.join("")
  document.body.style.backgroundColor = hexString;
  document.querySelector(".color-name").textContent = hexString;
  document.querySelector(".color-name").color = hexString;
}
