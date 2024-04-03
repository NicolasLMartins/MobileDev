class Aluno {
    private _nomeAluno: string;
    private _notaProva: number;
    private _notaTrabalho: number;
    private _media!: number;
    
    constructor(
        nomeAluno: string,
        notaProva: number,
        notaTrabalho: number
    ) {
        this._nomeAluno = nomeAluno;
        this._notaProva = notaProva;
        this._notaTrabalho = notaTrabalho;
    }

    private calcularMedia(): void {
        this._media = (this._notaProva * 7 + this._notaTrabalho * 3) / 10;
    }

    private verificarMedia(): string {
        this.calcularMedia();
        
        if (this._media >= 60) {
            return "Aluno aprovado";
        } else {
            return "Aluno reprovado";
        }
    }

    public toString(): string {
        return `Nome: ${this._nomeAluno}, Resultado: ${this.verificarMedia()}, Média: ${this._media.toFixed(2)}`;
    }

    public set notaProva(novaNota: number) {
        this._notaProva = novaNota;
    }

    public set notaTrabalho(novaNota: number) {
        this._notaTrabalho = novaNota;
    }
}

const aluno = new Aluno("Eduardo", 100, 50);
console.log(aluno.toString());

aluno.notaProva = 40;
aluno.notaTrabalho = 100;

console.log(aluno.toString());