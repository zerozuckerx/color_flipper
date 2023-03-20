// *** VARIABLES ***
const colors = ["Green", "Yellow", "Rgba(133,122,200)", "#F15025"];

// *** BUTTON ASSIGMENTS ***
const colorButton = document.getElementById("btn");

// *** FUNCTIONS ***
colorButton.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[randomNumber];
  document.querySelector(".color-name").textContent = colors[randomNumber];
});
