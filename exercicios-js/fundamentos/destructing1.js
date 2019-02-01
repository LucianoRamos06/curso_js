const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)


const {sobrenome, humor = true} = pessoa
console.log(sobrenome, humor)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro: lo, numero: nu}} = pessoa
console.log(lo, nu)