// Number Types
// See https://webassembly.github.io/spec/core/binary/types.html#number-types
module.exports.NumTypes = {
	i32: 0x7f,
	i64: 0x7e,
	f32: 0x7d,
	f64: 0x7c,
}

// Vector Types
// See https://webassembly.github.io/spec/core/binary/types.html#vector-types
module.exports.V128 = 0x7b

// Function Types
// See https://webassembly.github.io/spec/core/binary/types.html#function-types
module.exports.FuncType = 0x60

// Value types
// See https://webassembly.github.io/spec/core/binary/types.html#value-types
module.exports.ValType = {
	i32: 0x7f,
	i64: 0x7e,
	f32: 0x7d,
	f64: 0x7c,
}
