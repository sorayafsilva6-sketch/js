const comida = {
     nome: "Enroladinho de salchicha",
     preço: 8.00
}

// Trocar um valor existe
comida.nome = "Enroladinho de Salsicha"

// Criar um novo valor
comida.validade = "2 dias"

console.log(comida)

console.log("O meu salgado favorito na cantina é" + comida.nome)
console.log("Ele custa " + comida.preço)

// Remover um campo
delete comida.nome

console.log(comida)
