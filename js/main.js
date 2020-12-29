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
  // Draw Image
  ctx.drawImage(image, 0, 0);
  // Update Status
  updateStatus("Copy");
};

// Function to Convert to Greyscale
const toBW = () => {
  // TODO: Globalize Context
  const image = document.getElementById("image");
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");
  // Copy Image
  ctx.drawImage(image, 0, 0);
  // Get Image Data
  let imageBase = ctx.getImageData(0, 0, image.width, image.height);
  let data = imageBase.data;
  // Alter Each Pixel
  let i = 0;
  for (i = 0; i < data.length; i += 4) {
    var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i + 0] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
  }
  // Display Result
  ctx.putImageData(imageBase, 0, 0);
  // Update Status
  updateStatus("Grey");
};

// Function to Color Image
const toColor = () => {
  // TODO: Globalize Context
  const image = document.getElementById("image");
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");
  // Copy Image
  ctx.drawImage(image, 0, 0);
  // Get Image Data
  let imageBase = ctx.getImageData(0, 0, image.width, image.height);
  let data = imageBase.data;
  // Alter Each Pixel
  // New grayscale image = ( (0.3 * R) + (0.59 * G) + (0.11 * B) ).
  // https://www.tutorialspoint.com/dip/grayscale_to_rgb_conversion.htm
  let i = 0;
  for (i = 0; i < data.length; i += 4) {
    data[i + 0] = data[i + 0] * 0.3; // Red * 0.3
    data[i + 1] = data[i + 1] * 0.3; // Green * 0.59
    data[i + 2] = data[i + 2] * 0.3; // Blue * 0.11
  }
  // Display Result
  ctx.putImageData(imageBase, 0, 0);
  // Update Status
  updateStatus("Grey");
};

// Function to Download Image
const downloadImage = () => {
  // TODO: Globalize Context
  const c = document.getElementById("canvas");
  const ctx = c.getContext("2d");
  const link = document.getElementById("link");
  // Set Link to new Image
  link.setAttribute("download", "Colorized.png");
  link.setAttribute(
    "href",
    canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
  );
};
