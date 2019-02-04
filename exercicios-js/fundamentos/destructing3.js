function rand({min = 0, max =  100}){
    return Math.random() * (max - min) + min
}

const obj = {min: 5, max: 30}
console.log(rand(obj))
console.log(rand({max: 30}))
console.log(rand({}))