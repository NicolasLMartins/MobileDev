"use strict";
// Enunciado: Crie uma classe chamada Retangulo que tenha as propriedades
// largura e altura, e um método que retorne a área do retângulo. 
class Retangulo {
    constructor(largura, altura) {
        this._largura = largura;
        this._altura = altura;
    }
    areaTotal() {
        return this._largura * this._altura;
    }
    ;
    toString() {
        return `Largura: ${this._largura}, Altura: ${this._altura}, Área total: ${this.areaTotal()}`;
    }
    set largura(novaLargura) {
        this._largura = novaLargura;
    }
    set altura(novaAltura) {
        this._altura = novaAltura;
    }
}
const retangulo = new Retangulo(5, 10);
console.log(retangulo.toString());
retangulo.largura = 4;
retangulo.altura = 5;
console.log(retangulo.toString());
