Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado =  function(nota){
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8)){
        console.log('Aprovado')
    } else if (nota.entre(5, 6)){
        console.log('Recuperação')
    } else if (nota.entre(0, 5)){
        console.log('Reprovado')
    } else{
        console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(-1)