const nome = "Rebeca"
const concatenacao = "Olá ".concat(nome).concat("!") 

const template  = `
    Olá
    ${nome}!`

console.log(template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() 

console.log(`Ei... ${up('Cuidado')}!`)