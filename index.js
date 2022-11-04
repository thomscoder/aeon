const Processor = require('./helpers/processor');
const WasmReader = require('./helpers/reader')
const { checkHeader, parseTypeSection, parseFunctionSection, parseExportSection, parseCodeSection } = require("./runtime/parser");
const wasmBinary = Uint8Array.from([0, 97, 115, 109, 1, 0, 0, 0, 1, 7, 1, 96, 2, 127, 127, 1, 127, 3, 2, 1, 0, 7, 16, 1, 12, 34, 97, 100, 100, 78, 117, 109, 98, 101, 114, 115, 34, 0, 0, 10, 9, 1, 7, 0, 32, 0, 32, 1, 106, 11]);

const parseWasm = (wasmBinary) => {
    const wasm = new WasmReader(wasmBinary);

    const headers = checkHeader(wasm);
    console.log("headers", headers);
    
    const typeSection = parseTypeSection(wasm);
    console.log("typeSection", typeSection);

    const functionTypes = parseFunctionSection(wasm);
    console.log(functionTypes)

    const exportSection = parseExportSection(wasm);
    console.log("exportSection", exportSection)

    const codeSection = parseCodeSection(wasm);
    console.log("codeSection", codeSection)

    const moduleAst = {
        typeSection: typeSection,
        functionTypes,
        exportSection,
        codeSection: codeSection,
    }

    console.log("Module", moduleAst)
    return moduleAst;
}

const invokeFunction = (ast, funcName, params) => {
    let name = ast.exportSection.find(exp => exp.name === funcName);
    if (!name) throw new Error("No export found");

    let exportDescriptor = ast.exportSection[0].desc;
    let func = ast.codeSection[exportDescriptor];

    let functionType = ast.functionTypes[exportDescriptor]
    if (ast.typeSection[0][0].length !== params.length) {
        throw new Error("Invalid arguments number");
    }

    const processor = new Processor(func, params);
    processor.executeFunc();

    return processor.getResult();
}


console.log(invokeFunction(parseWasm(wasmBinary), "addNumbers", [89,5]));