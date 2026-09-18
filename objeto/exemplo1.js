// Para criar um objeto precisa colocar {}

const pessoa = {
    nome: "Soraya Ferreira",
    idade: 16,
    email: "fsoraya452@gmail.com",
    notas: [7, 8, 8, 6, 7], // Pode colocar uma lista dentro do objeto
    endereco: { // Pode colocar um objeto dentro do objeto
        cidade: "Carapicuiba",
        uf: "SP"
    }
}

// Para acessar o um valor na variavel é só usar o . 
console.log(pessoa.nome)

console.log(pessoa["nome"])

console.log(pessoa.endereco.cidade)
