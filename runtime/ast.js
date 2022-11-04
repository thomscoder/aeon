const WasmReader = require("../helpers/reader");
const { parseExportSection, parseTypeSection, parseFunctionSection, parseCodeSection, checkHeader } = require("./parser");


// we create an AST of the parsed module
module.exports.createAST = (wasmBinary) => {
  const wasm = new WasmReader(wasmBinary);
  checkHeader(wasm);
  //console.log("headers", headers);
  const typeSection = parseTypeSection(wasm);
  //console.log("typeSection", typeSection);
  const functionTypes = parseFunctionSection(wasm);
  //console.log(functionTypes)
  const exportSection = parseExportSection(wasm);
  //console.log("exportSection", exportSection)
  const codeSection = parseCodeSection(wasm);
  //console.log("codeSection", codeSection)

  const moduleAst = {
      typeSection,
      functionTypes,
      exportSection,
      codeSection,
  }

  //console.log("Module", moduleAst)
  return moduleAst;
}
