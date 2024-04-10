import { Animal } from "../interfaces/IAnimal";

export class Cachorro implements Animal {
    _especie: string;

    constructor(
        especie: string
    ) {
        this._especie = especie;
    }

    emitirSom(): string {
        return "au au!";
    }

    public toString(): string {
        return `${this._especie} diz: ${this.emitirSom()}`;
    }
}