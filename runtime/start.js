const { createAST } = require("./ast");
const { invokeFunction } = require("./invoker");

const startAeonRuntime = (wasm, ...args) => {
    const ast = createAST(wasmBinary);
    const funcName = "addNumbers";
    const params = [...args];

    const result = invokeFunction(ast, funcName, params);
    return result;
}

module.exports = startAeonRuntime;