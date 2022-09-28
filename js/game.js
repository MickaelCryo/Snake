const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const snake = new Snake(SQUARE_SIZE);
const food = new Food();
let currentDirection = "down";

function DeteckKeyPress() {
  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowLeft":
        currentDirection = "left";
        break;
      case "ArrowRight":
        currentDirection = "right";
        break;
      case "ArrowDown":
        currentDirection = "down";
        break;
      case "ArrowUp":
        currentDirection = "up";
        break;
    }
  });
}

function ClearScreen() {
  ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE);
}

function Update() {
  ClearScreen();
  food.draw();
  snake.update();
  if (snake.alive) {
    setTimeout(Update, 150);
  }
}

function Start() {
  DeteckKeyPress();
  Update();
}

Start();
