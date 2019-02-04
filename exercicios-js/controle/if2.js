function teste1(num){
    if (num > 7) 
        console.log(num)

    console.log('Final...')
}


function teste2(num){
    if (num < 7); { //cuidado na hora de usar ';' em estruturas de controle
        console.log(num)
    }
}

teste1(8)
teste2(1)