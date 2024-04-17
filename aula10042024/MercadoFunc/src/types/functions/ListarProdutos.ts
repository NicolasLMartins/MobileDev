import { Produto } from "../interfaces/IProduto";

export function listarProdutos(produtos: Produto[]) {
    produtos.forEach(produto => {
        if (produto._quantidade > 50) {
            console.log(`${produto._quantidade} produtos em estoque.`);
        } else {
            console.log(`${produto._nomeProduto}, ${produto._quantidade} produtos. Renovar estoque.`);
        }
    });
}