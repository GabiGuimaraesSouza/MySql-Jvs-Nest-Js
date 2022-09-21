const prompt = require("prompt-sync")()

let idade = 0
let contV = 0
let contS = 0

while(idade != 99){
    idade = Number(prompt("Digite sua idade: "))

    if(idade <= 21){
        contV++ 
    }if (idade > 50){
        contS++
    }
}

console.log(`Total de pessoas com menos de 21 anos é: ${contV}`)
console.log(`Total de pessoas com mais de 50 anos é: ${contS}`)
