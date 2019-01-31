/**
 * as variavés do tipo var podem ser redeclaradas no mesmo trecho de código
 * enquanto as variaveis let não permitem uma redeclaração
 * Deve-se optar por usar variaveis do tipo let
 */
var a = 3
let b = 5

var a = 30
b = 50

console.log(a, b)

a = 400
b = 500

console.log(a, b)

const c = 8

console.log(c)