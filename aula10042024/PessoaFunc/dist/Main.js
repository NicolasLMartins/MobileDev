"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function listarPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa._nome}, CPF: ${pessoa._cpf}, Idade: ${pessoa._idade}, Email: ${pessoa._email}`);
    });
}
const pessoas = [
    { _nome: "Nícolas", _cpf: "111.222.333-44", _idade: 17, _email: "nicolas@concordiasl.com.br" },
    { _nome: "Eduardo", _cpf: "333.444.555-66", _idade: 18, _email: "eduardo@concordiasl.com.br" },
    { _nome: "Larah", _cpf: "222.333.444-55", _idade: 19, _email: "larah@concordiasl.com.br" }
];
listarPessoas(pessoas);
