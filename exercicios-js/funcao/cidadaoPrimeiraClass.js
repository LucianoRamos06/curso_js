//função de forma literal 
function fun1(){

}

//Armazenar em uma variável
const fun2 = function(){ }

//Armazenar funções em um array
const array = [function(a, b){a + b}, fun1, fun2]
console.log(array[0](2, 5))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function(){console.log('Opâ...')}

obj.falar()

/**
 * Função que executa outra função
 * @param { } fun 
 */
function run(fun){
    fun()
}

run(function (){
    console.log("Executando...")
})

//Retornar uma função
function soma(a, b){
    return function(c){
        return a + b + c
    }
}

console.log(soma(2, 5)(5))

const cincoMais = soma(2, 5)
console.log(cincoMais(5))