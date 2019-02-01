//Armazenando função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(1, 5)

//Armazenando função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 5))

//Retorno inplicito função arrow
const subtracao = (a, b) => a - b

console.log(subtracao(2, 6))

const imprimir2 = a => console.log(a)

imprimir2("certo")

/**
 * Função arrow, segue por uma seta e não precisa da palavra function
 */