const button = document.getElementById("animateBtn");
const colorPicker = document.getElementById("colorPicker");

// Load stored colour from localStorage
window.onload = () => {
  const savedColor = localStorage.getItem("buttonColor");
  if (savedColor) {
    button.style.backgroundColor = savedColor;
    colorPicker.value = savedColor;
  }
};

// Trigger animation on click
button.addEventListener("click", () => {
  button.classList.add("animated");

  // Remove the class after animation ends
  setTimeout(() => {
    button.classList.remove("animated");
  }, 300);
});

// Save user colour preference
colorPicker.addEventListener("input", (e) => {
  const selectedColor = e.target.value;
  button.style.backgroundColor = selectedColor;
  localStorage.setItem("buttonColor", selectedColor);
});
