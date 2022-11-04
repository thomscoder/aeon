// Module magic \asm and version
// URL: https://webassembly.github.io/spec/core/binary/modules.html#binary-version
module.exports.MAGIC   = [0x00, 0x61, 0x73, 0x6d]
module.exports.VERSION = [0x01, 0x00, 0x00, 0x00]

// Opcodes
// URL on https://webassembly.github.io/spec/core/binary/instructions.html
module.exports.Opcodes = {
	// unreachable = 0x00
	block       : 0x02,
	loop        : 0x03,
	br          : 0x0c,
	br_if       : 0x0d,
	end         : 0x0b,
	call        : 0x10,
	get_local   : 0x20,
	set_local   : 0x21,
	i32_store_8 : 0x3a,
	i32_const   : 0x41,
	f32_const   : 0x43,
	i32_eqz     : 0x45,
	i32_eq      : 0x46,
	f32_eq      : 0x5b,
	f32_lt      : 0x5d,
	f32_gt      : 0x5e,
	i32_and     : 0x71,
	i32_add     : 0x6a,
	i32_sub 		: 0x6b,
	f32_add     : 0x92,
	f32_sub     : 0x93,
	f32_mul     : 0x94,
	f32_div     : 0x95,
}

// Section
// See https://webassembly.github.io/spec/core/binary/modules.html#sections
module.exports.Section = {
	custom: 0x00,
	type:   0x01,
	import: 0x02,
	func:   0x03,
	table:  0x04,
	memory: 0x05,
	global: 0x06,
	export: 0x07,
	code:   0xa,
}

// Export section
// Based on http://webassembly.github.io/spec/core/binary/modules.html#export-section
module.exports.ExportSection = {
	func:   0x00,
	table:  0x01,
	mem:    0x02,
	global: 0x03,
}
