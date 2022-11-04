# Aeon ⏳✨

Aeon is an extremely tiny and easy to use WebAssembly Binary Format runtime for <a href="https://github.com/thomscoder/luna" target="_blank">Luna</a>, built for demonstration and educational purposes.

It is part of the <a href="https://github.com/thomscoder/luna" target="_blank">Luna</a> project, so its purpose is to give an overview of how to build a custom WebAssembly runtime.

It is not a replacement for solid runtimes like <a href="https://wasmer.io/">Wasmer</a> or <a href="https://github.com/bytecodealliance/wasmtime">Wasmtime</a>, it is just a tool that should serve as a landmark for anyone that wants to start learning the secrets of Wasm.

Hence, I tried to document it as much as I could!

# How to use❓
 - Pass the Wasm binary, the function name and parameters to the main function
 - Done (you should see the result)

 ```js
const startAeonRuntime = require("./runtime/start");
 // This binary 
 // - takes 3 parameters of type `i32` (3, 127, 127, 127) 
 // - outputs one `i32` result (1, 127)
 // - exports a function called "addNumbers" (12, 34, 97, 100, 100, 78, 117, 109, 98, 101, 114, 115, 34)
 // - that adds them all (0, 32, 0, 32, 1, 32, 2, 106, 11)
const wasmBinary = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 8, 1, 96, 3, 127, 127, 127, 1, 127, 3, 2, 1, 0, 7, 16, 1, 12, 34, 97, 100, 100, 78, 117, 109, 98, 101, 114, 115, 34, 0, 0, 10, 9, 1, 7, 0, 32, 0, 32, 1, 32, 2, 106, 11]);

const n1 = 8;
const n2 = 20;
const n3 = 23;

const result = startAeonRuntime(wasmBinary, "addNumbers", n1, n2, n3);
console.log(`${n1} + ${n2} + ${n3} =`, result) // prints 51
 ```

# Roadmap
- `Optimizations` it is not very optimized yet - (as I'm learning too)
- `Support more wasm feature` currently it supports only additions and i32 integers, but it makes it easy to add more features

# Contribute
If you have any suggestion, feedback or want to add features, feel free to open issues, pull requests or fork the project.
Turn it into a npm package, embed it in your next project, build beautiful tutorials...
Aeon will be able (in the near future) to be open to all the possibilities to teach Web Assembly.  