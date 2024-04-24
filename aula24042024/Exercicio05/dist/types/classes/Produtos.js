"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(nomeDoProduto, quantidade, preco) {
        this._dadosDoProduto = [nomeDoProduto, quantidade, preco];
    }
    toString() {
        return `Nome do produto: ${this._dadosDoProduto[0]}, Quantidade: ${this._dadosDoProduto[1]}, Preço: R$ ${this._dadosDoProduto[2].toFixed(2)}`;
    }
}
exports.Produto = Produto;
