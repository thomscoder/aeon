;; Module that exports a function called "aeonAddition" 
;; Compile this with https://luna-demo.vercel.app
(module
  (func (export "aeonAddition") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add)
)
