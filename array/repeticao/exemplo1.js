const pessoasCommaisAuraDoSenai = ["Alex", "Reginaldo", "Wilson", "Rafael", "Isabel"]


for(let i = 0; i < pessoasCommaisAuraDoSenai.length; i++){
    // quando esta usando for com um array é sempre bom usar 
    // o método length
    console.log("Posição: " + (i + 1) + ": " + pessoasCommaisAuraDoSenai[i])
}

console.log("====== FOR EACH ======")

for(const pessoa of pessoasCommaisAuraDoSenai){
    console.log(pessoa)
}


// ============
// sempre que usar ofr com um array 
// é importante começar com o contador no zero 

const numeros = [10, 20, 30, 40, 50]

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}
          