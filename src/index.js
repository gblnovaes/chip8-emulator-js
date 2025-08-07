import { Chip8 } from "./chip8";

const chip8 = new Chip8();
let result = 0;

chip8.registers.stackPush(0);
chip8.registers.stackPush(30);
chip8.registers.stackPush(13);
chip8.registers.stackPush(33);
chip8.registers.stackPush(13);
chip8.registers.stackPush(1);
chip8.registers.stackPush(13);
chip8.registers.stackPush(1);
chip8.registers.stackPush(13);
chip8.registers.stackPush(45);
chip8.registers.stackPush(13);
chip8.registers.stackPush(12);
chip8.registers.stackPush(44);

for (let i = 0; i < 12; i++) {
  result = chip8.registers.stackPop();
  console.log("" + i + ":" + result);
}
