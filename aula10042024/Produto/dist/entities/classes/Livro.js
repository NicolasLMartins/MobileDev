"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    calcularDesconto() {
        let precoComDesconto = this._preco * 0.9;
        return precoComDesconto;
    }
    toString() {
        return `Nome: ${this._nome}, Preço: R$ ${this._preco.toFixed(2)}, Preço com desconto: R$ ${this.calcularDesconto().toFixed(2)}`;
    }
}
exports.Livro = Livro;
