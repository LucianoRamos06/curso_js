let isAtivo = false

console.log(isAtivo)

isAtivo = true

console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)

console.log("Os tipos verdadeiros...")

console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 2))

console.log("Os tipos falsos...")

console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = 0))

console.log("Para finalizar...")

console.log(('' || null || 0 || ' '))

let nome = ''
console.log(nome ? nome : 'Desconhecido') 