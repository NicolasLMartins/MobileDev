class Endereco {
    private nome: string;
    private cpf: string;
    private endereco: string;
    private cidade: string;
    private estado: string;

    constructor(
        nome: string,
        cpf: string,
        endereco: string,
        cidade: string,
        estado: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
    }

    public toString(): string {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Endereço: ${this.endereco}, Cidade: ${this.cidade}, Estado: ${this.estado}`;
    }
}

let endereco = new Endereco("Nícolas", "123.123.123-12", "Av. Brasil, 51", "São Paulo", "São Paulo");
console.log(endereco.toString());