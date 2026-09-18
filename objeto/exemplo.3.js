const filme = {
    título: "Interestelar",
    ano: 2014,
    diretor: "Cristopher Nolan",
    nota: 9.0,
    generos: [
        "Drama",
        "Aventura",
        "Ficção cientifíca"
    ]
}
 for(const chave in filme){
    if(chave == "nota")
        if(filme[chave] > 8){
              console.log("filme muito bom")
        }
 }
    console.log(chave + ": " + filme[chave])
 