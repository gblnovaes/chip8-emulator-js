import { Display } from "./Display";

export class Chip8 {
  constructor() {
    console.log("New Chip8 instance");
    this.display = new Display();
  }
}
