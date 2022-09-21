import { ContaBanco } from "./contabanco";

export class ContaCorrente extends ContaBanco{

    private limite = 0

    constructor(
        agencia: string,
        conta: string,
        titular: string,
        saldo: number,
        limite: number
    ){
        // o super referencia a classe pai
        super(agencia, conta, titular, saldo)
        this.limite = limite
    }
    

    sacar(valor: number): void {
        if(valor > 0 && valor <= this.saldo + this.limite){
            this.saldo -= valor
            // saque com sucesso
        }else{
            // impossivel realizar
        }

       
    }
    depositar(valor: number): void {
        if(valor > 0){
            this.saldo += valor
            // deposito com sucesso
        }else{
            // impossivel ser realizado
        }
       
    }

    alterarLimite(valor: number) {
        if(valor > 0 && valor < 200){
            // colocar indicativo de limite disponivel 
            this.limite = valor
            // limite alterado com sucesso
        }else{
            // impossivel de ser alterado
        }            

    }



}