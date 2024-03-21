"use strict";
class Teste {
    constructor(nome) {
        this.nome = nome;
    }
    cadastra() {
        return this.nome;
    }
}
const teste = new Teste("André");
console.log(teste.cadastra());
