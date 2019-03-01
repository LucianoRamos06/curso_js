/**
 * Closure é um escopo criado quando a função é declarada
 * esse escopo permite a função acessar variaveis externas a função
 */

 const x = 'Global'

 function fora () {

    const x = 'Dentro'

    function dentro () {
        return x
    }

    return dentro
 }

const minhaFuncao = fora()
console.log(minhaFuncao())