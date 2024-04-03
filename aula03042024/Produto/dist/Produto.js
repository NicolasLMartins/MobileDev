"use strict";
// 1. Um comerciante compra alguns produtos e coloca um percentual entre 30% e 60% sobre o preço de compra.
// Faça uma classe com as variáveis: nome_produto, preco_compra, preco_venda, percentual_aplicado, situacao_produto.
// Faça um método que receba o preco_compra e o percentual_aplicado e grave no preco_venda.
// Também nesse método, faça a seguinte comparação: se o percentual_aplicado for maior ou igual a 50% imprima na tela
// (Este produto está acima do valor médio de mercado) senão (Este produto está abaixo do valor médio de mercado).
// Faça uma saída de console com o seguinte: nome_produto, preco_venda, situacao_produto.
class Produto {
    constructor(nomeProduto, precoDeCompra, percentualAplicado) {
        this._nomeProduto = nomeProduto;
        this._precoDeCompra = precoDeCompra;
        this._percentualAplicado = percentualAplicado;
    }
    definirInfoVenda() {
        this._precoDeVenda = this._precoDeCompra * (1 + this._percentualAplicado / 100);
        if (this._percentualAplicado >= 50) {
            this._situacaoDoProduto = "Este produto está acima do valor médio de mercado.";
        }
        else {
            this._situacaoDoProduto = "Este produto está abaixo do valor médio de mercado.";
        }
        return [this._precoDeVenda, this._situacaoDoProduto];
    }
    toString() {
        const [preco, situacao] = this.definirInfoVenda();
        return `Nome do produto: ${this._nomeProduto}, Preço de venda: ${preco.toFixed(2)}, Situação do produto: ${situacao}`;
    }
    set percentualAplicado(novoPercentual) {
        this._percentualAplicado = novoPercentual;
    }
}
const produto = new Produto("Notebook", 1000.00, 50);
console.log(produto.toString());
produto.percentualAplicado = 60;
console.log(produto.toString());
produto.percentualAplicado = 40;
console.log(produto.toString());
