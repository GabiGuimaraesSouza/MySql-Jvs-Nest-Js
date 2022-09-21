export abstract class Animal{

    private nome: string
    private idade: number

    constructor(
        nome: string,
        idade: number
    ){
        this.nome = nome
        this.idade = idade
    }

    abstract emitirSom(): string
    abstract movimento(): string

}




