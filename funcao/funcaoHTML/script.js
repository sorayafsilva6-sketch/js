function saudacao(){
const nomedoUsuario = prompt("Digite seu nome") 
console.log("Você escreveu " + nomedoUsuario)
alert ("Olá "+ nomedoUsuario + "! Bem vindo(a)")

const IdadeDoUsuario = prompt ("Digite sua idade")
console.log("Você escreveu " + IdadeDoUsuario)

if(IdadeDoUsuario >= 18){
    alert("entrada permitida")
} else{ 
    alert("entrada não permitida")
}
}
