"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = void 0;
function listarProdutos(produtos) {
    produtos.forEach(produto => {
        if (produto._quantidade > 50) {
            console.log(`${produto._quantidade} produtos em estoque.`);
        }
        else {
            console.log(`${produto._nomeProduto}, ${produto._quantidade} produtos. Renovar estoque.`);
        }
    });
}
exports.listarProdutos = listarProdutos;
