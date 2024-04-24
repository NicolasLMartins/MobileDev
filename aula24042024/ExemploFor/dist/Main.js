"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("./types/classes/Pessoa");
for (let i = 0; i < 3; i++) {
    const idadeAleatoria = Math.floor(Math.random() * 100);
    const pessoa = new Pessoa_1.Pessoa();
    pessoa.imprimirIdade(idadeAleatoria);
}
