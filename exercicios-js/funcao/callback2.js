const notas = [4.3, 7.8, 6.5, 9.0, 8.2, 3.4]

let notasBaixas = []

for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

const notasBaixas2 = notas.filter((nota) => nota < 7)
console.log(notasBaixas2)