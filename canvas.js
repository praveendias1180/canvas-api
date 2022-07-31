const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");

function drawFrame() {
  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}

function drawBoxes() {
  ctx.fillStyle = "rgb(200, 0, 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect(30, 30, 50, 50);
}

function clearCanvas() {
  ctx.clearRect(0, 0, 150, 150);
}
