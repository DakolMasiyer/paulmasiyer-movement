function generatePoster() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#0b3d2e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Text styles
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";

  // Title
  ctx.font = "bold 36px Arial";
  ctx.fillText("PMM", canvas.width / 2, 120);

  // Movement text
  ctx.font = "18px Arial";
  ctx.fillText("AVM PAUL MASIYER MOVEMENT", canvas.width / 2, 160);

  // Highlight
  ctx.fillStyle = "#d4af37";
  ctx.font = "bold 28px Arial";
  ctx.fillText("I SUPPORT PMM", canvas.width / 2, 250);

  // Reset color
  ctx.fillStyle = "#ffffff";

  // User input
  const name = document.getElementById("name").value || "Supporter";
  const location = document.getElementById("location")
    ? document.getElementById("location").value
    : "";

  // Name
  ctx.font = "bold 24px Arial";
  ctx.fillText(name, canvas.width / 2, 320);

  // Location
  if (location) {
    ctx.font = "18px Arial";
    ctx.fillText(location, canvas.width / 2, 360);
  }
}

/* ===== DOWNLOAD FUNCTION ===== */
function downloadPoster() {
  const canvas = document.getElementById("canvas");
  const link = document.createElement("a");
  link.download = "pmm-poster.png";
  link.href = canvas.toDataURL();
  link.click();
}
