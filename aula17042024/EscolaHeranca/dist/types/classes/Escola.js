"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = void 0;
const Turma_1 = require("./Turma");
class Escola extends Turma_1.Turma {
    constructor(codigoTurma, quantidadeAlunos, nomeEscola) {
        super(codigoTurma, quantidadeAlunos);
        this._nomeEscola = nomeEscola;
    }
    toString() {
        return `Nome da escola: ${this._nomeEscola},\nCódigo da turma: ${this._codigoTurma},\nQuantidade de alunos: ${this._quantidadeAlunos}`;
    }
}
exports.Escola = Escola;
