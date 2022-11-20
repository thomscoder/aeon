const { createAST } = require("./ast");
const { invokeFunction } = require("./invoker");

const createAeonRuntime = (wasm) => {
  const ast = createAST(wasm);
  return (funcName, ...params) => invokeFunction(ast, funcName, params);
}

module.exports = createAeonRuntime;