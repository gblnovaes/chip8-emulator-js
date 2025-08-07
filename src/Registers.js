import { LOAD_ORIGIN_ADDRESS } from "./constants/memoryConstants.js";
import { NUMBER_OF_REGISTERS } from "./constants/registersConstants.js";
import { STACK_DEEP } from "./constants/registersConstants.js";

export class Registers {
  constructor() {
    this.V = new Uint8Array(NUMBER_OF_REGISTERS); // 16 registers
    this.I = 0; // index register
    this.delayTimer = 0; // delay timer
    this.soundTimer = 0; // sound timer
    this.PC = LOAD_ORIGIN_ADDRESS; // program counter
    this.SP = -1; // stack pointer
    this.stack = new Uint16Array(STACK_DEEP);

    this.reset();
  }

  reset() {
    this.V.fill(0);
    this.I = 0;
    this.delayTimer = 0;
    this.soundTimer = 0;
    this.PC = LOAD_ORIGIN_ADDRESS;
    this.SP = -1;
  }

  stackPush(value) {
    //console.log("stackPush", value);
    this.SP++;
    this.assertStackOverflow();
    this.stack[this.SP] = value;
  }

  stackPop() {
    //console.log("stackPop", this.stack[this.SP]);
    this.SP--;
    this.assertUnderOverflow();
    return this.stack[this.SP + 1];
  }

  assertStackOverflow() {
    console.assert(this.SP < STACK_DEEP, "Error stack overflow");
  }

  assertUnderOverflow() {
    console.assert(this.SP >= -1, "Error stack underflow");
  }
}
