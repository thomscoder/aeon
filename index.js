'use strict';
const { checkHeader, parseTypeSection } = require("./runtime/parser");

class Mama {
    constructor() {
        this.data = [0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 2, 127, 127, 1, 127, 3, 2, 1, 0, 7, 16, 1, 12, 34, 97, 100, 100, 78, 117, 109, 98, 101, 114, 115, 34, 0, 0, 10, 9, 1, 7, 0, 32, 0, 32, 1, 106, 11];
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

    bytes(num) {
        let prev = this.pos;
        this.pos += num;

        return this.data.slice(prev, this.pos);
    }

    byte() {
        let prev = this.pos;
        this.pos += 1;
        console.log("FUCK", this.data[prev])
        this.data[prev];
    }
}


const compile = () => {
    const read = new Mama();
    checkHeader(read);
    parseTypeSection(read);
}

compile();