const [a] = [1]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [5, 6, 6, 2]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[8, 5], [0, 6]] 
console.log(nota)