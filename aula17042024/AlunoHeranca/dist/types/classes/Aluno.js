"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const Notas_1 = require("./Notas");
class Aluno extends Notas_1.Notas {
    constructor(nota1, nota2, nota3, nomeAluno, idade) {
        super(nota1, nota2, nota3);
        this._resultado = "REPROVADO";
        this._nomeAluno = nomeAluno;
        this._idade = idade;
    }
    calculaMediaResultado() {
        this._media = (this._nota1 + this._nota2 + this._nota3) / 3;
        if (this._media >= 75) {
            this._resultado = "APROVADO";
        }
    }
    toString() {
        this.calculaMediaResultado();
        return `Nome do aluno: ${this._nomeAluno}, Idade do aluno: ${this._idade}, Média: ${this._media.toFixed(2)}, Resultado: ${this._resultado}`;
    }
}
exports.Aluno = Aluno;
