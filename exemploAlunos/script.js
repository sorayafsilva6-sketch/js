const alunos = []

function addAluno(){
    const nomeInserido = prompt("Digite o nome do aluno")
    const emailInserido = prompt("Digite o e-mail do aluno")

    const aluno = {
        id: alunos.length + 1,
        nome:nomeInserido,
        email:emailInserido
    }

    alunos.push(aluno) // Adiciona o aluno da lista
}


function showAluno(){
    console.log("=== ALUNOS ===")
    for(let i = 0; i < alunos.length; i++){
console.log(`id: ${alunos[i].id}, nome: ${alunos[i].nome}, email: ${alunos[i].email}`)
    }
}

function buscarPorNome(){
    const nomeProucurado = prompt("Digite o nome do aluno(a)")

    const alunoEncontrado = alunos.find(aluno => aluno.nome == nomeProucurado)

    if(alunoEncontrado){
        console.log("Aluno encontrado: " + alunoEncontrado.nome + "id:" + alunoEncontrado.id + ", e-mail" + alunoEncontrado.email)

    }else{
        console.log("Aluno nao encontrado")
    }

}

function excluirPorid(){
    const idProucurado = prompt("Digite o id do aluno")

    // busacr o index com base na codicao
     const idexDoAluno = alunos.findIndex( a => a.id == idProucurado)

     if( idexDoAluno != -1){
        alunos.splice(idexDoAluno, 1)
        alert("Removido com sucesso")

    }
    else{
        alert("Aluno nao encontrado")
    }
}
 
 