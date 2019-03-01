function criarProduto (nome, preco = 0) {
    return {
        nome: nome,
        preco: preco
    }
}

console.log(criarProduto("Maçã", 2.50))