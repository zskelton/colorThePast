// TODO: Remove
// Tester to make sure canvas works
const start = () => {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#00FF00";
  ctx.fillRect(20, 20, 150, 100);
};

// Function to Print Status Messages
const updateStatus = (txt) => {
  const stat = document.getElementById("status");
  stat.innerHTML = txt;
};

// Function to Copy Image As Is
const copyImage = () => {
  updateStatus("Copy");
};

// Function to Convert to Greyscale
const toBW = () => {
  updateStatus("Grey");
};

// Function to Color Image
const toColor = () => {
  updateStatus("Color");
};
