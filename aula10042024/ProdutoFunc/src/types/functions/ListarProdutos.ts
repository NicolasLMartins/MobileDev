import { Produto } from "../interfaces/IProduto";

export function listarProdutos(produtos: Produto[]) {
    let precoDeCompra: number = 0;
    
    produtos.forEach(produto => {
        precoDeCompra += produto._preco * produto._quantidade;
        console.log(`Nome: ${produto._nome}, Quantidade: ${produto._quantidade}`);
    });
    
    console.log(`\nPreço de compra: R$ ${precoDeCompra.toFixed(2)}`);
}