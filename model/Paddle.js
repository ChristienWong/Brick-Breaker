import Sprite from "./Sprite.js";

class Paddle extends Sprite {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color, 0, 0);
    this.displacement = 7;
    document.addEventListener("keydown", this.keyDownHandler.bind(this));
    document.addEventListener("keyup", this.keyUpHandler.bind(this));
  }

  move(canvasWidth) {
    super.move();
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x + this.width > canvasWidth) {
      this.x = canvasWidth - this.width;
    }
  }
  
  keyDownHandler(e) {
    if (e.key === "d") {
      this.dx = this.displacement;
    } else if (e.key === "a") {
      this.dx = -this.displacement;
    }
  }

  keyUpHandler(e) {
    if (e.key === "d") {
      this.dx = 0;
    } else if (e.key === "a") {
      this.dx = 0;
    }
  }
}

export default Paddle;