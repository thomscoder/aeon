const { Opcodes } = require("../utils/defaults");

module.exports = class Processor {
  constructor(func, params) {
    this.func = func;
    this.params = params;
    this.stack = [];
  }

  executeFunc() {
    for (const instruction of this.func[1]) {
      if (instruction == Opcodes.get_local) {
        this.stack.push(this.params[this.func[0].shift()]);
      }
      
      this.#parseInstruction(instruction)
    }
  }

  #parseInstruction(instruction) {
    let result;

    switch(instruction) {
      case Opcodes.i32_add:
        result = this.stack.reduce((prev, current) => prev + current, 0)
        return this.stack.push(result);

      case Opcodes.i32_sub:
        result = this.stack.reduce((prev, current) => prev - current, 0)
        return this.stack.push(result);
    }
  } 

  getResult() {
    return this.stack.pop()
  }
}