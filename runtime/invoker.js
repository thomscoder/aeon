const { RuntimeErrors } = require('../utils/errors');
const Processor = require('./processor');

module.exports.invokeFunction = (ast, funcName, params) => {
  let name = ast.exportSection.find(exp => exp.name === funcName);
  if (!name) throw new Error(RuntimeErrors.ExportNotFound);

  let exportDescriptor = ast.exportSection[0].desc;
  let func = ast.codeSection[exportDescriptor];

  let functionType = ast.functionTypes[exportDescriptor];

  if (ast.typeSection[exportDescriptor][0].length !== params.length) {
      throw new Error(RuntimeErrors.InvalidArgumentsNumber);
  }

  const processor = new Processor(func, params);
  processor.executeFunc();

  return processor.getResult();
}