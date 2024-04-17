import { Produto } from "../interfaces/IProduto";

export class Compra {
    private _precoCompra: number = 0;
    private _produtos: Produto[];

    constructor(
        produtos: Produto[]
    ) {
        this._produtos = produtos;
    }

    private calculaPrecoCompra(): number {
        this._produtos.forEach(produto => {
            this._precoCompra += produto._quantidade * produto._preco;
        });

        return this._precoCompra;
    }

    public toString(): void {
        this._produtos.forEach(produto => {
            console.log(`Nome: ${produto._nome}, Quantidade: ${produto._quantidade}`);
        });
        console.log(`\nPreço de compra: R$ ${this.calculaPrecoCompra().toFixed(2)}\n`);
    }
}