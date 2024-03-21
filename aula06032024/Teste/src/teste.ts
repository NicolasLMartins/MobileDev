class Teste {
    private nome: string;

    constructor(
        nome: string
    ) {
        this.nome = nome;
    }

    public cadastra() {
        return this.nome;
    }
}

const teste = new Teste("André");
console.log(teste.cadastra());