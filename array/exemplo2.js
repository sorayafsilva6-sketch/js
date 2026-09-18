let vingadores = ["Homem Aranha", "Homem de Ferro", "Viúva Negra"]

// Adiciona no final 
vingadores.push("Hulk")
// Adiciona no começo 
vingadores.unshift("Thor")

console.log(vingadores)

// Remover o ultimo 
vingadores.pop()
vingadores.pop()
vingadores.pop()

// Remover o primeiro
vingadores.shift()

console.log(vingadores)


// ======== Includes
console.log(vingadores.includes("Hulk")) // False não tem Hulk!
console.log(vingadores.includes("Homem Aranha")) // True tem homem aranha 
