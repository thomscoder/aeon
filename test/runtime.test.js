const createAeonRuntime = require("../runtime/start");
const { 
    additionBinary, 
    subtractionBinary, 
    divisionBinary,
    multiplicationBinary, 
    operationWithInternalVariableBinary 
} = require("../helpers/wasmSampleModules");

test("Addition: 10 + 5 should be equal to 15", () => {
    // Addition binary exports addNumbers (see https://luna-demo.vercel.app)
    const runtime = createAeonRuntime(additionBinary)
    expect(runtime("addNumbers", 10, 5)).toBe(15)
})
test("Subtraction: 10 - 5 should be equal to 5", () => {
    // Subtraction binary exports subtractNumbers (see https://luna-demo.vercel.app)
    const runtime = createAeonRuntime(subtractionBinary)
    expect(runtime("subtractNumbers", 10, 5)).toBe(5)

})
test("Division: 10 / 5 should be equal to 2", () => {
    // Division binary exports divideNumbers (see https://luna-demo.vercel.app)
    const runtime = createAeonRuntime(divisionBinary)
    expect(runtime("divideNumbers", 10, 5)).toBe(2)

})
test("Multiplication: 10 * 5 should be equal to 50", () => {
    // Multipliacation binary exports multiplyNumbers (see https://luna-demo.vercel.app)
    const runtime = createAeonRuntime(multiplicationBinary)
    expect(runtime("multiplyNumbers", 10, 5)).toBe(50)

})
test("Operation with internal values: 10 + 10 should be equal to 20", () => {
    // OperationWithInternalVariable binary exports operationWithInternalVariable (see https://luna-demo.vercel.app)
    const runtime = createAeonRuntime(operationWithInternalVariableBinary)
    expect(runtime("operationWithInternalVariable", 10, null)).toBe(20)
})