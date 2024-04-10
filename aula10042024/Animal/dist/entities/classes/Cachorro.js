"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
class Cachorro {
    constructor(especie) {
        this._especie = especie;
    }
    emitirSom() {
        return "au au!";
    }
    toString() {
        return `${this._especie} diz: ${this.emitirSom()}`;
    }
}
exports.Cachorro = Cachorro;
