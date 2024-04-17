export class Turma {
    protected _codigoTurma: number;
    protected _quantidadeAlunos: number;

    constructor(
        codigoTurma: number,
        quantidadeAlunos: number
    ) {
        this._codigoTurma = codigoTurma;
        this._quantidadeAlunos = quantidadeAlunos;
    }
}