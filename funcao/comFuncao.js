// DECLARANDO A FUNÇÃO
function CalcularTroco(precoLanche, valorPago){
    let troco = valorPago - precoLanche
    return troco 
}

// CHAMOU A FUNÇÃO 
console.log("Troco de cliente 1: " + CalcularTroco(8, 10))
console.log("Troco cliente 2: " + CalcularTroco(5, 20))
console.log("Troco cliente 3: " + CalcularTroco(12, 15))

function saudacao(nome){
    return "Olá! " + nome + "Bem-vindo(a)"
}

console.log(saudacao("Soraya"))
console.log(saudacao("Evelyn"))
