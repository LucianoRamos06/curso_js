console.log(Math.ceil(6.4))

function Obj(nome){
    this.nome = nome

    this.exec = function(){
        console.log('Exec...')
    }
}

const obj1 = new Obj('Cadeira')
const obj2 = new Obj('Mesa')

console.log(obj1.nome)
obj1.exec()

console.log(obj2.nome)
obj2.exec()