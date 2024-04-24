"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = void 0;
class Escola {
    constructor(alunos, turmas) {
        this._alunos = alunos;
        this._turmas = turmas;
    }
    mostrarDados() {
        console.log("Alunos:");
        this._alunos.forEach(aluno => {
            console.log(`Nome: ${aluno._nome}, CPF: ${aluno._cpf}, Idade: ${aluno._idade}, Email: ${aluno._email}`);
        });
        console.log("\nTurmas:");
        this._turmas.forEach(turma => {
            console.log(`Nome da turma: ${turma._nomeTurma}`);
        });
    }
}
exports.Escola = Escola;
