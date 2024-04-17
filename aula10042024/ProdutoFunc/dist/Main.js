"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compra_1 = require("./types/classes/Compra");
const ListarProdutos_1 = require("./types/functions/ListarProdutos");
const produtos = [
    { _nome: "Notebook", _quantidade: 1, _preco: 3000 },
    { _nome: "TV", _quantidade: 2, _preco: 1500 },
    { _nome: "Video Game", _quantidade: 1, _preco: 3800 },
];
const compra = new Compra_1.Compra(produtos);
compra.toString();
(0, ListarProdutos_1.listarProdutos)(produtos);
