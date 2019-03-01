const pessoa = {
    saudacao: "bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()

//Erro de paradiguimas de OO com funcional 
//Foi passado a função falar para uma constante,
// porém pelo fato desta constante não possuir todas as informações do objeto
//o mesmo retorna undefined   
const falar = pessoa.falar
falar()

/**
 * A função bind serve para informar qual é o escopo do this. 
 * dessa forma pode-se observar o this não mudará a partir do escopo.
 */
const falarDePessoa =  pessoa.falar.bind(pessoa)
falarDePessoa()