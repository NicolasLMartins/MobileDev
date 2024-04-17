import { Compra } from "./types/classes/Compra";
import { listarProdutos } from "./types/functions/ListarProdutos";

const produtos = [
    { _nome: "Notebook", _quantidade: 1, _preco: 3000 },
    { _nome: "TV", _quantidade: 2, _preco: 1500 },
    { _nome: "Video Game", _quantidade: 1, _preco: 3800 },
];

const compra = new Compra(produtos);

compra.toString();

listarProdutos(produtos);