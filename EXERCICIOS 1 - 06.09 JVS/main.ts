import PromptSync from "prompt-sync"
import { Cachorro } from "./cachorro"
import { Cavalo } from "./cavalo"
import { Preguica } from "./perguica"
const prompt = PromptSync()

console.log("Qual animal deseja visitar? ")
console.log("1 - Cachorro ")
console.log("2 - Cavalo ")
console.log("3 - Preguiça")
let opc = Number(prompt("Insira sua opção: "))
console.log(" ")

if (opc == 1) {
    let dog = new Cachorro(
        "Apa",
        15
    )
    console.log("Cachorro na rua ... ")
    console.log(`Motoqueiro passa: ${dog.emitirSom()} e ${dog.movimento()}`)
    
}else if (opc == 2){
    let horse = new Cavalo(
        "Alipio",
        15
    )
    console.log(`Julio na gaita, alipio ${horse.emitirSom()}`)
    console.log(`Tchau tchau tchau cocoricó: ${horse.movimento()} para o pasto`)
}else if(opc == 3){
    let preguica = new Preguica(
        "Flecha",
        35
    )
    console.log(`O som da preguiça é: ${preguica.emitirSom()} e ela está ${preguica.movimento()}`)

}else{
    console.log("Opção inválida!")
}



