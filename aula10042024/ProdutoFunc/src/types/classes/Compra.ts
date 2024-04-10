import { Produto } from "../interfaces/IProduto";

export class Compra {
    private _precoCompra: number = 0;
    private _produtos: Produto[];

    constructor(
        ...produtos: Produto[]
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
        let produtoString: string;
        this._produtos.forEach((produto, i) => { produtoString[i] = `Nome: ${produto._nome}, Quantidade: ${produto._quantidade}`; console.log(produtoString[i]) });
        console.log(`Preço de compra: R$ ${this.calculaPrecoCompra().toFixed(2)}`);
    }
}