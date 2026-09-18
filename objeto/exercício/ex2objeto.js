const livro ={
Titulo: "A Hipotese do amor",
Autor: "Ali Hazelwood",
ano: 2021,
disponível: true
}
livro.disponível; false
livro.página; 400

console.log("o livro " + livro.Titulo + " de " + livro.Autor + " foi lançado em " + livro.ano)

delete livro.ano
console.log(livro)