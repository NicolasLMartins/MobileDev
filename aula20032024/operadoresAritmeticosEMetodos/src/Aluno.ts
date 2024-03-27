class Aluno {
    private nome: string;
    private notas: number[];
    
    constructor(
        nome: string,
        notas: number[]
    ) {
        this.nome = nome;
        this.notas = notas;
    }

    public media(): number {
        const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    };
}

const notas = [7, 8, 9];
const aluno = new Aluno("Maria", notas);

console.log(aluno.media());