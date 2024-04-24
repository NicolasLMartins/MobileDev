export class Produto {
    private _dadosDoProduto: [string, number, number];

    constructor(
        nomeDoProduto: string,
        quantidade: number,
        preco: number
    ) {
        this._dadosDoProduto = [nomeDoProduto, quantidade, preco];
    }

    public toString(): string {
        return `Nome do produto: ${this._dadosDoProduto[0]}, Quantidade: ${this._dadosDoProduto[1]}, Preço: R$ ${this._dadosDoProduto[2].toFixed(2)}`;
    }
}