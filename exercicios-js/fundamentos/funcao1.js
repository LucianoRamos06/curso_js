//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 5, 5, 6, 4)

//função que retorna algo
function soma(a, b = 0){
    return a + b
} 

console.log(soma(1, 4))
console.log(soma(1))
console.log(soma(1, 1, 5))