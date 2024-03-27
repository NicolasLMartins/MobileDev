// Enunciado: Crie uma classe chamada Pessoa que tenha as propriedades nome e idade,
// e um método que retorne uma mensagem com o nome e a idade da pessoa.

class Pessoa {
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    public toString(): string {
        return `Nome: ${this._nome}, Idade: ${this._idade}`;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }
    
    set idade(novaIdade: number) {
        this._idade = novaIdade;
    }
}

const pessoa = new Pessoa("Eduardo", 18);

console.log(pessoa.toString());

pessoa.nome = "Larah";
pessoa.idade = 17;

console.log(pessoa.toString());
