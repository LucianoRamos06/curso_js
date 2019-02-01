/**
 * Variaveis var quando não são declaradas dentro de funções se tornam variaveis globais
 * ou seja, podem ser acessadas em qualquer parte do código.
 */

{
    {
        {
            var sera = 'Será???'
            console.log(sera)
        }
    }
}

console.log(sera)


function teste(){
    var local = 123
    console.log(local)
}

teste()
//console.log(local)