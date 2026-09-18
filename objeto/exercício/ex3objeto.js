const estoque = {
    arroz: 10,
    feijão: 3,
    macarrão: 15,
    leite: 2,
    café: 8

}

for(const chave in estoque){
    if(estoque[chave] <=3){
        console.log(chave + ":" + estoque[chave] + " unidades" + "-" + " Está acabando")

    }if(estoque[chave]>=3){
        console.log("Disponível")
    }
    console.log(chave + ":" + estoque[chave] + " unidades" + "-" + " Disponível")
}