const notas = [5.4, 6.4, 8.8, 9.0, 10.0]

for (const nota in notas) {
    console.log(nota, notas[nota])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva', 
    idade: 27, 
    peso: 58
}

for (const atributo in pessoa) {
   console.log(`${atributo} = ${pessoa[atributo]}`)
}