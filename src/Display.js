import {
  DISPLAY_WIDTH,
  DISPLAY_HEIGHT,
  DISPLAY_COLOR_GREEN,
  DISPLAY_BACKGROUND_COLOR_BLACK,
  DISPLAY_MULTIPLIER,
} from "./constants/displayConstants";

export class Display {
  constructor() {
    // console.log("New Display instance");
    this.screen = document.querySelector("canvas"); //seleciona o canvas da tela
    this.screen.width = DISPLAY_WIDTH * DISPLAY_MULTIPLIER; //define a largura do canvas
    this.screen.height = DISPLAY_HEIGHT * DISPLAY_MULTIPLIER; //define a altura do canvas

    this.context = this.screen.getContext("2d"); // pega o contexto do canvas 2d
    this.fillStyle = DISPLAY_BACKGROUND_COLOR_BLACK; //define a cor preta
    this.context.fillRect(0, 0, this.screen.width, this.screen.height);
    this.frameBuffer = [];
    this.reset();
  }

  reset() {
    for (let y = 0; y < DISPLAY_HEIGHT; y++) {
      this.frameBuffer.push([]);
      for (let x = 0; x < DISPLAY_WIDTH; x++) {
        this.frameBuffer[y].push(1);
      }
    }
    this.context.fillRect(0, 0, this.screen.width, this.screen.height);
    this.drawBuffer();
  }

  drawBuffer() {
    for (let h = 0; h < DISPLAY_HEIGHT; h++) {
      this.frameBuffer.push([]);
      for (let w = 0; w < DISPLAY_WIDTH; w++) {
        this.drawPixel(h, w, this.frameBuffer[h][w]);
      }
    }
  }

  drawPixel(h, w, value) {
    if (value) {
      this.context.fillStyle = DISPLAY_COLOR_GREEN;
    } else {
      this.context.fillStyle = DISPLAY_BACKGROUND_COLOR_BLACK;
    }
    this.context.fillRect(
      w * DISPLAY_MULTIPLIER,
      h * DISPLAY_MULTIPLIER,
      DISPLAY_MULTIPLIER,
      DISPLAY_MULTIPLIER
    );
  }
}
