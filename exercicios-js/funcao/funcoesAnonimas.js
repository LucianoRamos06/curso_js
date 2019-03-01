let soma = function(x, y) {
        return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(1, 4)
imprimirResultado(3, 3, soma)
imprimirResultado(4, 5, function(x, y){
    return x - y
})

imprimirResultado(4, 5, (x, y) => x * y)

const pessoa = {
    falar: function () {
        console.log('opâ')
    }
}

pessoa.falar()