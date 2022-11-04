const { Section, ExportSection, Opcodes } = require("../utils/defaults");
const { RuntimeErrors } = require("../utils/errors");
const { ValType } = require("../utils/types");

function parseValueType(wasm) {
    const valType = wasm.readByte();

    switch (valType) {
        case ValType.i32:
            return ValType.i32;
        case ValType.i64:
            return ValType.i64;
        default:
            throw new Error(RuntimeErrors.InvalidValueType);
    }
}

module.exports.checkHeader = (wasm) => {
    if (wasm.length < 8) {
        throw new Error(RuntimeErrors.ModuleTooShort);
    }

    const magicString = String.fromCharCode(...wasm.readBytes(4));
    if (magicString !== "\0asm") {
        throw new Error(RuntimeErrors.InvalidMagicHeader);
    }

    const version = wasm.dword();
    if (version.length < 1) {
        throw new Error(RuntimeErrors.InvalidVersionHeader);
    }

    return true;
}


module.exports.parseTypeSection = (wasm) => {
    const sectionType = wasm.readByte();
    if (typeof parseInt(sectionType) !== typeof parseInt(Section.type)) {
        throw new Error(RuntimeErrors.InvalidSection);
    }

    let size = wasm.readByte();
    const numTypes = wasm.readByte();
    let types = [];



    for (let i = 0; i < numTypes; i++) {
        let func = wasm.readByte();

        let numOfParams = wasm.readByte();
        let params = [];
        for (let j = 0; j < numOfParams; j++) {

            params.push(parseValueType(wasm))
        }

        let numOfResults = wasm.readByte();
        let results = [];
        for (let w = 0; w < numOfResults; w++) {
            results.push(parseValueType(wasm))
        }
        types.push([params, results])
    }

    return types;
}


module.exports.parseFunctionSection = (wasm) => {
    const isSectionFunc = wasm.readByte()
    if (isSectionFunc !== Section.func) {
        throw new Error(RuntimeErrors.InvalidSection);
    }

    let sectionSize = wasm.readByte();
    let num = wasm.readByte();
    let functionTypes = [];

    for (let i = 0; i < num; i++) {
        functionTypes.push(wasm.readByte())
    }

    return functionTypes;
}

module.exports.parseExportSection = (wasm) => {
    const isExportSection = wasm.readByte();
    if (isExportSection !== Section.export) {
        throw new Error(RuntimeErrors.InvalidSection);
    }

    let sectionSize = wasm.readByte();
    let num = wasm.readByte();
    let exportsArr = [];

    for (let i = 0; i < num; i++) {
        const length = wasm.readByte();
        const exportName = String.fromCharCode(...wasm.readBytes(length))

        if (!!exportName === false) throw new Error(RuntimeErrors.InvalidExportName)

        let zero = wasm.readByte();
        let exportDesc = (wasm.readByte() == ExportSection.func) && ExportSection.func;
        
        if (typeof exportDesc !== 'number' && !!exportDesc === false) {
            throw new Error(RuntimeErrors.InvalidExportType)
        }
     
        exportsArr.push({name: exportName.replace(/"/g, ""), desc: exportDesc})
    }

    return exportsArr;
}


module.exports.parseCodeSection = (wasm) => {
    const isCodeSection = wasm.readByte();

    
    if (isCodeSection !== Section.code) {
        throw new Error(RuntimeErrors.InvalidSection);
    } 
    
    let sectionSize = wasm.readByte();
    let numOfFunctions = wasm.readByte();
    let code = [];
    
    
    for (let i = 0; i < numOfFunctions; i++) {
        let funcBodySize = wasm.readByte();
        let numberOfLocals = wasm.readByte();

        let instructions = [];
        let locals = [];
        
        while (wasm.pos < wasm.data.length) {
            const instruction = wasm.readByte();
            
            instructions.push(instruction)
            
            if (instruction == Opcodes.get_local) {
                locals.push(wasm.readByte())
            }
        } 
        code.push([locals, instructions]);
    }

    return code
}
