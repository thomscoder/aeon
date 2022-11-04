const { createAST } = require("./ast");
const { invokeFunction } = require("./invoker");

const startAeonRuntime = (wasm, ...args) => {
    const ast = createAST(wasm);
    const [funcName, ...rest] = args;
    const params = rest;

    const result = invokeFunction(ast, funcName, params);
    return result;
}

module.exports = startAeonRuntime;