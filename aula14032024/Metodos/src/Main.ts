class Metodos {
    private nome: string;
    
    constructor(
        nome: string
    ) {
        /* CONSTRUTOR */ 
        this.nome = nome; // _nome que é privado recebe o valor de nome que é público
    }

    public cadastra(): string {
        return this.nome;
    }

    public toString(): string {
        return `Aluno cadastrado: ${this.nome}`;
    }
}

// "João" é passado por parâmetro para o método constructor()
// da classe Metodos e instancia um novo objeto
let m = new Metodos("João") /* OBJETO */;

m.cadastra();

console.log(m.toString());