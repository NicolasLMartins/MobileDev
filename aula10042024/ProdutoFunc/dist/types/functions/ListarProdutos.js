"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = void 0;
function listarProdutos(produtos) {
    let precoDeCompra = 0;
    produtos.forEach(produto => {
        precoDeCompra += produto._preco * produto._quantidade;
        console.log(`Nome: ${produto._nome}, Quantidade: ${produto._quantidade}`);
    });
    console.log(`\nPreço de compra: R$ ${precoDeCompra.toFixed(2)}`);
}
exports.listarProdutos = listarProdutos;
