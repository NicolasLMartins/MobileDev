"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Escola_1 = require("./types/classes/Escola");
const escola = new Escola_1.Escola([
    { _nome: "Eduardo", _cpf: "123.123.123-12", _idade: 18, _email: "eduardogarcia@concordiasl.com.br" },
    { _nome: "Larah", _cpf: "234.234.234-23", _idade: 17, _email: "larahguima@concordiasl.com.br" },
    { _nome: "Nícolas", _cpf: "345.345.345-34", _idade: 17, _email: "nicolas@concordiasl.com.br" }
], [
    { _nomeTurma: "Curso Técnico" },
    { _nomeTurma: "Ensino Médio" }
]);
escola.mostrarDados();
