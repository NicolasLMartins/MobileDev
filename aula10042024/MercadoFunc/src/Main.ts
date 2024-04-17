import { Produto } from "./types/interfaces/IProduto";
import { listarProdutos } from "./types/functions/ListarProdutos";

const produtos: Produto[] = [
    {_nomeProduto: "Computador", _quantidade: 51},
    {_nomeProduto: "TV", _quantidade: 50},
    {_nomeProduto: "Mouse", _quantidade: 49}
];

listarProdutos(produtos);