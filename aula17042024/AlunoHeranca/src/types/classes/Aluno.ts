import { Notas } from "./Notas";

export class Aluno extends Notas {
    private _nomeAluno: string;
    private _idade: number;
    private _media!: number;
    private _resultado: string = "REPROVADO";

    constructor(
        nota1: number,
        nota2: number,
        nota3: number,
        nomeAluno: string,
        idade: number,
    ) {
        super(nota1, nota2, nota3);
        this._nomeAluno = nomeAluno;
        this._idade = idade;
    }

    private calculaMediaResultado(): void {
        this._media = (this._nota1 + this._nota2 + this._nota3) / 3;
        
        if (this._media >= 75) {
            this._resultado = "APROVADO";
        }
    }
    
    public toString(): string {
        this.calculaMediaResultado();

        return `Nome do aluno: ${this._nomeAluno}, Idade do aluno: ${this._idade}, Média: ${this._media.toFixed(2)}, Resultado: ${this._resultado}`;
    }
}