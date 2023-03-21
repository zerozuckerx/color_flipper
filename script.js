// *** VARIABLES ***
const colorsSimple = ["Green", "Yellow", "Rgba(133,122,200)", "#F15025"];
const colorsHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let hex = false;

// *** BUTTON ASSIGMENTS ***
const colorButton = document.querySelector(".click-me");
const switchSimpleButton = document.querySelector(".switchSimple");
const switchHexButton = document.querySelector(".switchHex");
// const switchButtons = document.querySelectorAll(".switch");

// *** FUNCTIONS ***
switchSimpleButton.addEventListener("click", () => {
  hex = false;
  switchSimpleButton.classList.add("active");
  switchHexButton.classList.remove("active");
});

switchHexButton.addEventListener("click", () => {
  hex = true;
  switchHexButton.classList.add("active");
  switchSimpleButton.classList.remove("active");
});

// switchButtons.forEach(switchButton => {
//   switchButton.addEventListener("click", () => {
//     if(switchButton.textContent === "Hex") {
//       hex = false;
//       switchButton.classList.add("active");
//       switchButton.classList.remove("active");
//     } else {
//       hex = true;
//       switchButton.classList.add("active");
//       switchButton.classList.remove("active");
//     }
// })});

colorButton.addEventListener("click", () => {
  if(!hex) {
    color = simpleFlipper();
  } else {
    color = hexFlipper();
  }
  document.body.style.backgroundColor = color;
  document.querySelector(".color-name").textContent = color;
  document.querySelector(".color-name").style.color = color;
});

function simpleFlipper() {
  const randomNumber = Math.floor(Math.random() * colorsSimple.length)
  return colorsSimple[randomNumber];
}

function hexFlipper() {
  const hexColor = ["#"];
  for(let i = 1; i <= 6; i++) {
    let randomHexLetter = Math.floor(Math.random() * 16);
    hexColor.push(colorsHex[randomHexLetter]);
  }
  return hexColor.join("");
}
