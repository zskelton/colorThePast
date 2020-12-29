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

// Get Pixel Color
const getColorXY = (x, y, width) => {
  const base = y * (width * 4) + x * 4;
  return [base, base + 1, base + 2, base + 3];
};

// Function to Copy Image As Is
const copyImage = () => {
  // TODO: Globalize context
  const image = document.getElementById("image");
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");

  ctx.drawImage(image, 0, 0);

  updateStatus("Copy");
};

// Function to Convert to Greyscale
const toBW = () => {
  // TODO: Globalize Context
  const image = document.getElementById("image");
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");

  let x = 0;
  let y = 0;
  let width = image.width;
  let height = image.height;

  // Copy Image
  ctx.drawImage(image, 0, 0);
  // Get Image Data
  let pixel = ctx.getImageData(0, 0, image.width, image.height);
  let data = pixel.data;
  console.log(data);
  // Alter Each Pixel
  // Display Result
  // Update Status

  updateStatus("Grey");
};

// Function to Color Image
const toColor = () => {
  updateStatus("Color");
};
