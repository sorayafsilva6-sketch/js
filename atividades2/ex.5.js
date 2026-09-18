let preço = 10
let mês = 12

for(mes = 1; mês <= 12;mês++){
    preço = (preço*0.05) + preço
    console.log("No mês "+ mês + " o preço" + preço)

}