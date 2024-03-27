"use strict";
class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas;
    }
    media() {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
    ;
}
const notas = [7, 8, 9];
const aluno = new Aluno("Maria", notas);
console.log(aluno.media());
