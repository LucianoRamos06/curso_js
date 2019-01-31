/**
 * como as estruturas de dados do java scripty são fracamente tipadas 
 * os arrays podem ter varios tipos da dados 
 * 
 * porém não deve-se criar vetores com tipos diferentes de dados 
 */

const valores = [2.2, 4.3, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[10] = 10.9

console.log(valores)
console.log(valores.length)

valores.push({id: 1}, false, "texto")

console.log(valores)

console.log(valores.pop())
delete valores[0]

console.log(valores)

console.log(typeof valores)