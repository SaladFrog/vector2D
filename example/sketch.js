const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

var drops = [];

for (var i = 0; i < 500; i++) {
  drops[i] = new Drop();
}

function setup() {
  requestAnimationFrame(setup);
  clear();
  draw();
}
function clear() {
  context.fillStyle = "black";
  context.fillRect(0, 0, width, height);
}

function draw() {
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
setup();
