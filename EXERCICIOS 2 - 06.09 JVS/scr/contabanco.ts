export abstract class ContaBanco{
    
    private agencia: string
    private conta: string
    private titular: string
    protected saldo: number
        
    constructor (

        agencia: string,
        conta: string,
        titular: string,
        saldo: number

    ){

        this.agencia = agencia
        this.conta = conta
        this.titular = titular
        this.saldo = saldo

    }
    
    abstract sacar(valor: number): void

    abstract depositar(valor: number): void

// sem utilizar o return já entende que é void
    consultarSaldo(){
        console.log(`Saldo da conta R$${this.saldo}`)
    }
}