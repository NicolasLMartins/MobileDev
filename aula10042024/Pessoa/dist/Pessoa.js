"use strict";
class Aluno {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
}
const aluno1 = new Aluno("João", 17);
const aluno2 = { _nome: "Eduardo", _idade: 26 };
console.log(`Aluno 1: Nome: ${aluno1._nome}, Idade: ${aluno1._idade}`);
console.log(`Aluno 2: Nome: ${aluno2._nome}, Idade: ${aluno2._idade}`);
