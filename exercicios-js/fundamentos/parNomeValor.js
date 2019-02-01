//par nome/valor
const saudacao = 'Opâ' //primeiro contexto léxico

function exec(){
    const saudacao = 'Falaaa' //segundo contexto léxico
    return saudacao
}

//Objeto são grupos aninhados de chave/valor
const pessoa = {
    nome: "Fulano de Tal",
    idade: 21,
    sexo: "Masculino",
    endereco: {
        rua: "Av. Legal",
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(pessoa)