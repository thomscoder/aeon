const { createAST } = require("./runtime/ast");
const { invokeFunction } = require("./runtime/invoker");

const wasmBinary = Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 2, 127, 127, 1, 127, 3, 2, 1, 0, 7, 16, 1, 12, 34, 97, 100, 100, 78, 117, 109, 98, 101, 114, 115, 34, 0, 0, 10, 9, 1, 7, 0, 32, 0, 32, 1, 106, 11]);
const n1 = 8;
const n2 = 20;



const startAeonRuntime = (wasm, ...args) => {
    const ast = createAST(wasmBinary);
    const funcName = "addNumbers";
    const params = Uint32Array.from([...args]);

    const result = invokeFunction(ast, funcName, params);
    return result;
}

const result = startAeonRuntime(wasmBinary, n1, n2);
console.log(`${n1} + ${n2} =`, result)


// console.log(invokeFunction(parseWasm(wasmBinary), "addNumbers", [89,5]));