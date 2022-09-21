import { Animal } from "./animal";

export class Cavalo extends Animal{

    emitirSom(): string {
       return "Relinchando"
    }
    movimento(): string {
        return "Cavalgando"
    }

    
}