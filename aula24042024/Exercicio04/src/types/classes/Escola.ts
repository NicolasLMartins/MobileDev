import { Aluno } from "../interfaces/IAluno";
import { Turma } from "../interfaces/ITurma";

export class Escola {
    private _alunos: Aluno[];
    private _turmas: Turma[];

    constructor(
        alunos: Aluno[],
        turmas: Turma[]
    ) {
        this._alunos = alunos;
        this._turmas = turmas;
    }

    public mostrarDados(): void {
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