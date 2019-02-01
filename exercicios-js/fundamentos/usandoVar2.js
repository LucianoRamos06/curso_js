/**
 * Mesmo que uma variavel seja declarada duas vezes em mais de um bloco de código
 * o valor dela será sobrescrito, visto que toda variavel var que se enconta fora de
 * uma função é vista como uma variavel global
 */
var numero = 1

{
    var numero = 2
    console.log(numero)
}

console.log(numero)

