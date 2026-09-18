function somar(a, b){
    const resultado = a + b
    return resultado

}
function media(a, b, c){
    const resultado = a + b + c
    return resultado 
}

console.log(somar(10, 33))

const somar2 = (a, b) => {return a + b}

console.log(somar2(99, 100))

const somar3 = (a, b) => a + b

console.log(somar3(100, 200))

const somar4 = (a, b) => a - b
console.log(somar4(15, 8))

const somar5 = (a, b) => a/b 
console.log(somar5(19, 4))

const somar6 = (a, b) => a * b
console.log(somar6(400, 5))

const somar7 = (a) => a*2
console.log(somar7(7))

const somar8 = (a,  b, c) => (a + b + c) /3
console.log(somar8(5, 3, 7))



const maiornumero = (a, b) => a > b ? a : b

console.log("O maior número é: ", maiornumero(7, 10))
