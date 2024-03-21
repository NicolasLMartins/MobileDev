class Pessoa {
    private nome: string;
    
    constructor(
        nome: string,
    ) {
        this.nome = nome
    }

    static listarNomes(...pessoas: Pessoa[]) {
        pessoas.forEach(pessoa => {
            console.log(pessoa.nome);
        });
    }
}

let pessoa1 = new Pessoa("Nícolas");
let pessoa2 = new Pessoa("Eduardo");
let pessoa3 = new Pessoa("Larah");

Pessoa.listarNomes(pessoa1, pessoa2, pessoa3);