"use strict";
class Endereco {
    constructor(nome, cpf, endereco, cidade, estado) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
    }
    toString() {
        return `Nome: ${this.nome}, CPF: ${this.cpf}, Endereço: ${this.endereco}, Cidade: ${this.cidade}, Estado: ${this.estado}`;
    }
}
let endereco = new Endereco("Nicolas", "123.123.123-12", "Av. Brasil, 51", "São Paulo", "São Paulo");
console.log(endereco.toString());
