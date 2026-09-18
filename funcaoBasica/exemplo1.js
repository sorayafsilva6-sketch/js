const texto = "Eu amo JavaScript!   "

console.log(texto.trim()) // Remove espaço vazio do começo e do final
console.log(texto.toUpperCase()) // Em caixa alta
console.log(texto.toLowerCase()) // em caixa baixa
console.log(texto.replace("javascript", "HTML"))
console.log(texto.includes("amo"))// verifica se dentro do texto tem a palavra

const melhorMeme = "Troll face"
console.log("O melhor meme do mundo é o " + melhorMeme)
console.log(`O melhor meme do mundo é o ${melhorMeme}`)