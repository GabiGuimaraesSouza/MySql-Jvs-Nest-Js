import { Animal } from "./animal";

export class Cachorro extends Animal{

    emitirSom(): string{
        return "ruuuh UAUAUAUA"
    }
    movimento(): string{ 
      return "correndo igual cachorro"
    }
}