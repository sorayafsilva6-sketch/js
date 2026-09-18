// Lista vazia 
let lista = []

function adicionar(){
    let produto = prompt("Digite o nome do produto")
    lista.push(produto)
        alert("Produto adicionado com sucesso!")
        mostrarProdutos()
}

function mostrarProdutos(){
    console.clear()// Limpa o console das mensagens anteriores

    for(let i=0; i < lista.length; i++){
        console.log(lista[i])
}
}

function removerUltimo(){
    lista.pop()
    alert("Ultimo produto removido com sucesso!")
}