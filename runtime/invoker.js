const Processor = require('./processor');

module.exports.invokeFunction = (ast, funcName, params) => {
  let name = ast.exportSection.find(exp => exp.name === funcName);
  if (!name) throw new Error("No export found");

  let exportDescriptor = ast.exportSection[0].desc;
  let func = ast.codeSection[exportDescriptor];

  let functionType = ast.functionTypes[exportDescriptor];

  if (ast.typeSection[0][0].length !== params.length) {
      throw new Error("Invalid arguments number");
  }

  const processor = new Processor(func, params);
  processor.executeFunc();

  return processor.getResult();
}