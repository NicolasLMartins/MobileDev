"use strict";
class Metodos {
    constructor(nome) {
        this.nome = nome;
        /* CONSTRUTOR */
        this._nome = nome; // _nome que é privado recebe o valor de nome que é público
    }
    cadastra() {
        return this.nome;
    }
}
// "João" é passado por parâmetro
let m = new Metodos("João") /* OBJETO */;
m.cadastra();
console.log(`Aluno cadastrado: ${m.nome}`);
