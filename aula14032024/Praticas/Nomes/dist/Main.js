"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    static listarNomes(...pessoas) {
        pessoas.forEach(pessoa => {
            console.log(pessoa.nome);
        });
    }
}
let pessoa1 = new Pessoa("Nícolas");
let pessoa2 = new Pessoa("Eduardo");
let pessoa3 = new Pessoa("Larah");
Pessoa.listarNomes(pessoa1, pessoa2, pessoa3);
