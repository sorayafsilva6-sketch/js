let numeros = [15, 8, 32, 12, 45, 20];
let maior = numeros[0]

for(let numero of numeros){
    if(numero > maior){
        maior=numero;
    }
}
console.log(maior)