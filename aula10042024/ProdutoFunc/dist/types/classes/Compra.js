"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compra = void 0;
class Compra {
    constructor(produtos) {
        this._precoCompra = 0;
        this._produtos = produtos;
    }
    calculaPrecoCompra() {
        this._produtos.forEach(produto => {
            this._precoCompra += produto._quantidade * produto._preco;
        });
        return this._precoCompra;
    }
    toString() {
        this._produtos.forEach(produto => {
            console.log(`Nome: ${produto._nome}, Quantidade: ${produto._quantidade}`);
        });
        console.log(`\nPreço de compra: R$ ${this.calculaPrecoCompra().toFixed(2)}\n`);
    }
}
exports.Compra = Compra;
