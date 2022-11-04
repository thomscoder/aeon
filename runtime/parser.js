const { Section } = require("../utils/defaults");
const { ValType } = require("../utils/types");

module.exports.checkHeader = (wasm) => {
    if (wasm.length < 8) {
        throw new Error("Runtime error");
    }

    const magicString = String.fromCharCode(...wasm.bytes(4));
    if (magicString !== "\0asm") {
        throw new Error("Wrong magic number");
    }

    const version = wasm.dword();
    if (version.length < 1) {
        throw new Error("Wrong version error");
    }

    return;
}


module.exports.parseTypeSection = (wasm) => {
    const sectionType = wasm.byte();
    console.log("sectiontype", parseInt(sectionType) !== parseInt(Section.type))
    if (typeof parseInt(sectionType) !== typeof parseInt(Section.type)) {
        throw new Error("Invalid section type");
    }

    let size = wasm.byte();
    let numTypes = wasm.byte();
    let types = [];

    function parseValueType(wasm) {
        const valType = wasm.byte();
        switch (valType) {
            case 0x7f:
                return ValType.i32;
            case 0x7e:
                return ValType.i64;
            default:
                throw new Error("Invalid Val type");
        }
    }

    for (const nByte of numTypes) {
        let func = wasm.byte();
        let params = [];

        for (const wByte of wasm.byte()) {
            params.push(parseValueType(wasm))
        }

        let results = [];
        for (const wByte of wasm.byte()) {
            results.push(parseValueType(wasm))
        }
        types.push([params, results])
    }

    return types;
}