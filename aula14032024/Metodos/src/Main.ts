class Metodos {
    private _nome: String;
    
    constructor(
        public nome: String
    ) {
        /* CONSTRUTOR */ 
        this._nome = nome; // _nome que é privado recebe o valor de nome que é público
    }

    cadastra(): String {
        return this.nome;
    }
}

// "João" é passado por parâmetro
let m = new Metodos("João") /* OBJETO */;

m.cadastra();

console.log(`Aluno cadastrado: ${m.nome}`);