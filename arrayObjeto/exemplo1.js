const usuarios = [
{
    nome: "Ana Sofia",
    email: "ana@gmail.com",
    idade: 16,
    ativo: true
},
{
    nome: "Alberto",
    email: "alberto@gmail.com",
    idade: 16,
    ativo: false
},
{
    nome: "Leandro",
    email: "leandro@gmail.com",
    idade: 16,
    ativo: true
}
]


console.log(usuarios[2].email)
console.log(usuarios[0].nome)

for(let i = 0; i < usuarios.length; i++){
    if(!usuarios[i].ativo){
        console.log(usuarios[i].nome)
    }
}

// Filtrar todos os elementos com base na condição 
const ativos = usuarios.filter(usuario => usuario.ativo === true)
console.log(ativos)

// busca um elemento que atende a condição e retorna quando encontrar o primeiro 
const cliente16anos = usuarios.find(usuario => usuario.idade === 16)

// includes verifica se tem a seguinte palavra no texto
const buscarLeandro = usuarios.find(u => u.nome.includes("Leandro"))
console.log(buscarLeandro)
// transforma a lista em uma nova lista 
const soNomes = usuarios.map(u =>{
    return{
        nome: u.nome,
        idade: u.idade
    }

} 



