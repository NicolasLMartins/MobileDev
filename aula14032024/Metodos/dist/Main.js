"use strict";
class Metodos {
    constructor(nome) {
        /* CONSTRUTOR */
        this.nome = nome; // _nome que é privado recebe o valor de nome que é público
    }
    cadastra() {
        return this.nome;
    }
    toString() {
        return `Aluno cadastrado: ${this.nome}`;
    }
}
// "João" é passado por parâmetro para o método constructor()
// da classe Metodos e instancia um novo objeto
const metodo = new Metodos("João") /* OBJETO */;
metodo.cadastra();
console.log(metodo.toString());
