let filmes = [];
let proximoID = 1;
    function CadastrarFilme(){

     const titulo = prompt("Digite o titulo do filme: ");
     if(titulo === null || titulo.trim()===""){
        alert("O título não pode ficar vazio!")
        return;
     }
     const anodelancamento = prompt("Digite o ano de lancamento: ");
     const generodofilme = prompt("Digite o genero do filme: ");
          
        let filme = {
            titulo: titulo,
            ano: anodelancamento,
            genero: generodofilme
};
        filmes.push(filme);
        alert("Filme cadastrado com sucesso");
    }
function DeletarFilme(){
    let id = prompt ("Digite o ID do filme que deseja deletar: ");
    if (id < 1 || id > filmes.length){
        alert("Item não encontrado.");
        return;
    }
    let novaLista = [];
    for (let i = 0; i < filmes.length; i++){
        if (i + 1 !=id){
            novaLista.push(filmes[i]);
        }
    }
    filmes = novaLista;
    alert("Filme deletado com sucesso!");
}
function Exibirtodosositens(){
    if(filmes.length== 0){
        alert("Nenhum filme cadastrado.");
        return;
    }
    for (let i = 0; i < filmes.length; i++){
        alert("ID: " + (i + 1));
        alert("Titulo: " + filmes[i].titulo);
        alert("ano: " + filmes[i].ano);
        alert("Genero: " + filmes[i].genero)
    }
}
function BuscarFilmes(){
    let titulo = prompt("Digite o titulo do filme: ");
    for (let i = 0; i < filmes.length; i++){
        if (filmes[i].titulo == titulo){
            alert("Filme encontrado!");
            alert("ID: " + (i + 1));
            alert("Titulo: " + filmes[i].titulo)
            alert("Ano: " + filmes[i].ano)
            alert("Genero: " + filmes[i].genero)
            return;
        }
    }
    alert("Nenhum filme encontrado.")
}
function RemoverUltimo(){
    if (filmes.length ==0){
        alert("Nenhum filme cadastrado.");
        return;
    }
    filmes.pop();
    alert("Ultimo filme removido com sucesso!");
}
function LimparTudo(){
    if (filmes.length ==0){
        alert("Nenhum filme cadastrado.");
        return;
    }
    let confirmar = confirm("Tem certeza que deseja remover todos os filmes?");
    if(confirmar){
        filmes = [];
        alert("Todos os filmes foram removidos!")
    }
}
function ExibirTotaldeitens(){
    alert("Total de filmes cadastrados: " + filmes.length)
}
    if (confirmar){
        filmes = []
        alert("Todos os filmes foram removidos!")
    }

