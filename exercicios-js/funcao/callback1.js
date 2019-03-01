const fabricantes = ['Mercedes', 'BMW', 'Gol']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach((valor, indice, vetor) => console.log(valor, indice, vetor))