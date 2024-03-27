"use strict";
class Retangulo {
    constructor(largura, altura) {
        this._largura = largura;
        this._altura = altura;
    }
    isSquare() {
        if (this._largura === this._altura) {
            return "O desenho É um quadrado.";
        }
        else {
            return "O desenho NÃO é um quadrado.";
        }
    }
    set largura(novaLargura) {
        this._largura = novaLargura;
    }
    set altura(novaAltura) {
        this._altura = novaAltura;
    }
}
const retangulo = new Retangulo(5, 5);
console.log(retangulo.isSquare());
retangulo.largura = 6;
retangulo.altura = 4;
console.log(retangulo.isSquare());
