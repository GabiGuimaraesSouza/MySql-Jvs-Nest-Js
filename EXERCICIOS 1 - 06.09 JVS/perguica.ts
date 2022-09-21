import { Animal } from "./animal";

export class Preguica extends Animal{
    emitirSom(): string {
        return "Som indecifrável"
    }
    movimento(): string {
        return "Subindo, subindo ..."
    }
    
}