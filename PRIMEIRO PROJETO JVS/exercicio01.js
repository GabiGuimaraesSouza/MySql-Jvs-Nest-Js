const prompt = require("prompt-sync")()

let base = Number(prompt("insira valor de base: "))
let altura = Number(prompt("insira valor de altura: "))

if (base > 0 && altura > 0 ){
    console.log(`O valor da area do triangulo é ${base * altura / 2}`)
}else{
    console.log("Impossivel")
}