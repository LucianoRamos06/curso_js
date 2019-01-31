const escola = 'Cod3r'

console.log(escola.charAt(4))

/**
 * caso se busque um index que não existe o linguagem retorna vazio
 */
console.log(escola.charAt(5))

console.log(escola.charCodeAt(4))

console.log(escola.indexOf("3"))

console.log(escola.substring(0, 5))

console.log("Escola ".concat(escola).concat("!"))

console.log(escola.replace(3, 'e'))

console.log("maria, joão, carlos".split(','))