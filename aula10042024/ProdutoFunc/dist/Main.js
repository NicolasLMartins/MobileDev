"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Compra_1 = require("./types/classes/Compra");
const compra = new Compra_1.Compra({ _nome: "Notebook", _quantidade: 1, _preco: 3000 }, { _nome: "TV", _quantidade: 2, _preco: 1500 }, { _nome: "Video Game", _quantidade: 1, _preco: 3800 });
console.log(compra.toString());
