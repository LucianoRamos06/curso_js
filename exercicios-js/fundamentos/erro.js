function tratarErro(erro){
    // throw new Error("....")
    // throw true
    // throw "teste"
    throw {
        nome: erro.nome,
        mensagem: erro.mensagem,
    }
}

function imprimirNomeGritado(obj){
    try {
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch(e){
        tratarErro(e)
    } finally{
        console.log("fim!!!")
    }
}

imprimirNomeGritado({ nome: "Teste" })