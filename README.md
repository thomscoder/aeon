# Aeon

Aeon is an extremely tiny and easy to use WebAssembly runtime, built for demonstration and educational purposes.

It is part of the <a href="https://github.com/thomscoder/luna">Luna</a> project, so its purpose is to give an overview of how to build a custom WebAssembly runtime.

It is not a replacement for solid runtimes like <a href="https://wasmer.io/">Wasmer</a> or <a href="https://github.com/bytecodealliance/wasmtime">Wasmtime</a>, it is just a tool that should serve as a landmark for anyone that wants to start learning the secrets of Wasm.

I've decided to switch to Javascript from Go because I needed something to test Luna quickly without all the boilerplate that comes just to import Golang builds into Javascript.

Now I can just send, copy/paste (...) an array to see if it is working as intended.

I tried to document it as much as I could!

# How to use
 - Pass the Wasm binary, the function name and parameters to the main function
 - Done (you should see the result)

# Roadmap
- `Optimizations` it is not very optimized yet - (as I'm learning too)
- `Support more wasm feature` currently it supports only additions and i32 integers, but it makes it easy to add more features

# Contribute
If you have any suggestion, feedback or want to add features, feel free to open issues, pull requests or fork the project.
Turn it into a npm package, embed it in your next project, build beautiful tutorials...Aeon will be able (in the near future) to be open to all the possibilities to teach Web Assembly.  