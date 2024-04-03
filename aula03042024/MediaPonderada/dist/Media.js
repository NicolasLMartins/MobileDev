"use strict";
class Aluno {
    constructor(nomeAluno, notaProva, notaTrabalho) {
        this._nomeAluno = nomeAluno;
        this._notaProva = notaProva;
        this._notaTrabalho = notaTrabalho;
    }
    calcularMedia() {
        this._media = (this._notaProva * 7 + this._notaTrabalho * 3) / 10;
    }
    verificarMedia() {
        this.calcularMedia();
        if (this._media >= 60) {
            return "Aluno aprovado";
        }
        else {
            return "Aluno reprovado";
        }
    }
    toString() {
        return `Nome: ${this._nomeAluno}, Resultado: ${this.verificarMedia()}, Média: ${this._media.toFixed(2)}`;
    }
    set notaProva(novaNota) {
        this._notaProva = novaNota;
    }
    set notaTrabalho(novaNota) {
        this._notaTrabalho = novaNota;
    }
}
const aluno = new Aluno("Eduardo", 100, 50);
console.log(aluno.toString());
aluno.notaProva = 40;
aluno.notaTrabalho = 100;
console.log(aluno.toString());
