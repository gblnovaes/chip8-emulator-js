import { MEMORY_SIZE } from "./constants/memoryConstants.js";
export class Memory {
  constructor() {
    this.memory = new Uint8Array(MEMORY_SIZE);
    this.reset();
  }

  reset() {
    this.memory.fill(0);
  }

  setMemory(index, value) {
    this.memory[index] = value;
  }

  getMemory(index) {
    this.asertMemory(index);

    return this.memory[index];
  }

  asertMemory(index) {
    console.assert(index >= 0 && index <= MEMORY_SIZE, "Invalid memory index");
  }

  printMemory() {
    console.log(this.memory);
  }
}
