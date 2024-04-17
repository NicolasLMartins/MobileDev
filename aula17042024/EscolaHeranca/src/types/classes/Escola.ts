import { Turma } from "./Turma";

export class Escola extends Turma {
    private _nomeEscola: string;

    constructor(
        codigoTurma: number,
        quantidadeAlunos: number,
        nomeEscola: string
    ) {
        super(codigoTurma, quantidadeAlunos);
        this._nomeEscola = nomeEscola;
    }

    public toString(): string {
        return `Nome da escola: ${this._nomeEscola},\nCódigo da turma: ${this._codigoTurma},\nQuantidade de alunos: ${this._quantidadeAlunos}`;
    }
}