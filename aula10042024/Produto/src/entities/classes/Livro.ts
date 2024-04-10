import { Produto } from "../interfaces/IProduto";

export class Livro implements Produto {
    _nome: string;
    _preco: number;

    constructor(
        nome: string,
        preco: number
    ) {
        this._nome = nome;
        this._preco = preco;
    }

    calcularDesconto(): number {
        let precoComDesconto = this._preco * 0.9; 
        return precoComDesconto;
    }

    public toString(): string {
        return `Nome: ${this._nome}, Preço: R$ ${this._preco.toFixed(2)}, Preço com desconto: R$ ${this.calcularDesconto().toFixed(2)}`;
    }
}