"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListarProdutos_1 = require("./types/functions/ListarProdutos");
const produtos = [
    { _nomeProduto: "Computador", _quantidade: 51 },
    { _nomeProduto: "TV", _quantidade: 50 },
    { _nomeProduto: "Mouse", _quantidade: 49 }
];
(0, ListarProdutos_1.listarProdutos)(produtos);
