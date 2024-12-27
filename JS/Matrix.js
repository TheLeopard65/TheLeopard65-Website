const canvas = document.getElementById("MATRIXCANVAS");  // Get the canvas element
const ctx = canvas.getContext("2d");                     // Set the width and height of the canvas
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const columns = Math.floor(canvasWidth / 20);      // Create an array of columns
const yPositions = [];                             // Initialize the y positions of the columns
for (let i = 0; i < columns; i++) { yPositions[i] = Math.random() * canvasHeight; }
function updateMatrix() {                          // Update the matrix animation
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";           // Set the background color
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);   // Set the background to entire canvas
  ctx.fillStyle = "green";                         // Set the text color and font
  ctx.font = "13px couriernew";                 // Set the Fond style and size
  for (let i = 0; i < columns; i++) {              // Loop through each column
    const character = characters[Math.floor(Math.random() * characters.length)]; // Select a random character from the array
    const y = yPositions[i];                       // Set the y position of the current column
    ctx.fillText(character, i * 20, y);            // Draw the character at the current position
    yPositions[i] += 20;                           // Move the column down by 20 units
    if (yPositions[i] > canvasHeight && Math.random() > 0.98) {
      yPositions[i] = 0;                           // Reset the position if it reaches the bottom of the canvas
    }
  }
}
function renderMatrix() {                          // Render the matrix animation
  requestAnimationFrame(renderMatrix);
  updateMatrix();
}
renderMatrix();                                    // Start the animation
