//Função pode ser chamada antes de ser declarada 
console.log(soma(1, 2))

//function declaration
function soma(x, y) {
    return x + y
}


//Funções só podem ser chamadas depois de ser declaradas

//function express
const sub = function (x, y) {
    return x - y
}

console.log(sub(3, 1))

//function name expresse
const mult = function mult(x , y) {
    return x * y
}

console.log(mult(3, 2))