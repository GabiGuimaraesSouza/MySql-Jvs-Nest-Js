const prompt = require("prompt-sync")()

while (true) {

console.log("Bem vindo ao sistema de gerenciamento new bank")
console.log("1 - Abertura de conta ")
console.log("2 - Verificar saldo")
console.log("3 - Alterar dados")
console.log("4 - Fazer deposito")
console.log("5 - Sair")
let opc = Number(prompt("digite a opção desejada: "))



    if (opc == 1) {
        const Anome = prompt("Digite seu nome: ")
        let idade = prompt("Digite sua idade: ")
        let telefone = prompt("Digite seu telefone: ")
        let endereco = prompt("Digite seu endereço: ")
        let saldo = Number(prompt("Digite o valor do primeiro deposito: "))
    } else if (opc == 2) {
        console.log(`Seu saldo é ${saldo}`)
    } else if (opc == 3) {
        console.log("1 - Alterar telefone ")
        console.log("2 - Alterar endereço")
        console.log("3 - Sair")
        let opc2 = prompt("digite a opção desejada: ")
        if (opc2 == 1) {
            telefone = prompt("Digite o novo numero de telefone: ")
        } else if (opc2 == 2) {
            endereco = prompt("Digite o novo endereço: ")
        } else if (opc2 == 3) {
            console.log("Obrigado por utilizar o sistema newBank")
            console.log("break")
        } else {
            console.log("Opção inválida!")
            console.log("break")
        }
    } else if (opc == 4) {
        let novoValor = Number(prompt("Digite o valor do deposito: "))
        saldo += novoValor
        console.log(`Deposito efetuado com sucesso, seu novo saldo é R$${saldo}`)
    } else if (opc == 5) {
        console.log("Obrigado por utilizar o sistema newBank")
        console.log("break")
    } else {
        console.log("Opção inválida!")
        console.log("break")
    }


}












