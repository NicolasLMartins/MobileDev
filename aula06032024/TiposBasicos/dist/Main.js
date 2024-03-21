"use strict";
// PRIMITIVOS
const stringTest = "Isso é uma string."; // Representa sequências de caracteres
const numberTest1 = 500; // Representa números, sejam inteiros ou decimais
const numberTest2 = 500.25;
const isBool = true; // Representa um valor booleano, verdadeiro ou falso
// ARRAYS E TUPLAS
const arrayTest1 = ["Teste1", "Teste2"]; // Representa uma coleção de valores do mesmo tipo e é declarado colocando '[]' 
// após o tipo dos elementos ou simplesmente atribuindo um array à variável
const arrayTest2 = [1, 2, 3.5, 4];
const arrayTest3 = Array(2); // [undefined, undefined]
const arrayTest4 = Array(2, 2); // [1, 2]
const tupleTest1 = ["Teste", 4.5, false]; // Representa um array com um número fixo de elementos onde
// cada um pode ter um tipo diferente
// ENUM
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
})(DiaDaSemana || (DiaDaSemana = {}));
const enumTest = DiaDaSemana.Quarta;
const anyTest1 = "Teste"; // Tipo padrão quando uma variável não é tipada,
// pode representar qualquer tipo
const anyTest2 = ["Teste", 1.5, true];
const anyTest3 = 250.50;
const anyTest4 = true;
