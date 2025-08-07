import { Display } from "./Display";
import { Memory } from "./Memory";
import { Registers } from "./Registers";

export class Chip8 {
  constructor() {
    console.log("New Chip8 instance");
    this.display = new Display();
    this.memory = new Memory();
    this.registers = new Registers();
  }
}
