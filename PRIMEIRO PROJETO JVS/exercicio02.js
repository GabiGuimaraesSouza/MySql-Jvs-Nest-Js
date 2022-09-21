const prompt = require("prompt-sync")()

let sal100 = 0
let somaf = 0
let somas = 0
let parada = 1
let mf = 0
let ms = 0
let MS = 0
let salario = 0
let vezes = Number(prompt("Quantas vezes quer repetir o programa? "))

while (parada <= 3) {
    parada++
    let qf = Number(prompt("Insira o numero de filhos: "))
     salario = Number(prompt("Insira o valor do salário: "))
    
    if (salario <= 100) {
        sal100++

    }if (salario >= salario) {
         MS = salario
    }
    somaf += qf
    somas += salario

}
// loop termina aqui


 mf = somaf / vezes
 ms = somas / vezes
let p100 = sal100 / vezes * 100

console.log(`A media de salarios é: ${ms}`)
console.log(`A média de filhos por familia é: ${mf}`)
console.log(`O percentual de familias com salarios até R$100,00 é: ${p100}%`)
console.log(`O maior salario é: R$${MS}`)