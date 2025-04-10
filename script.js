// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const colorButton = document.getElementById("colorButton");

  // Add click event listener
  colorButton.addEventListener("click", function () {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

    // Change the background color
    document.body.style.backgroundColor = randomColor;
  });
});
