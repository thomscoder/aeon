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

      if (instruction == Opcodes.i32_add) {
        let a = this.stack.shift();
        let b = this.stack.shift();

        while (b != 0) {
          const carry = a & b;
          a = a ^ b;
          b = carry << 1;
        } 
        const result = a; 
        this.stack.push(result);
      }
    }
  }

  getResult() {
    return this.stack.pop()
  }
}