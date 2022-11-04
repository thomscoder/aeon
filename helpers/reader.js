
module.exports = class WasmReader {
  constructor(wasm) {
      this.data = new Uint8Array(wasm);
      this.pos = 0;
  }

  len() {
      return this.data.length;
  }

  dword() {
      let prev = this.pos;
      this.pos += 4;
      const arr = this.data.slice(prev, this.pos);
      return arr
  }

  readBytes(num) {
      let prev = this.pos;
      this.pos += num;

      return this.data.slice(prev, this.pos);
  }

  readByte() {
      let prev = this.pos;
      this.pos += 1;
      return this.data[prev];
  }
}
