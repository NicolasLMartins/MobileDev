class Carro {
    private _modeloCarro: string;
    private _categoriaCarro: string;
    private _precoDeCompra: number;
    private _precoDeVenda!: number;

    constructor(
        modeloCarro: string,
        categoriaCarro: string,
        precoDeCompra: number
    ) {
        this._modeloCarro = modeloCarro;
        this._categoriaCarro = categoriaCarro;
        this._precoDeCompra = precoDeCompra;
    }

    private definirPrecoDeVenda(): void {
        if (this._categoriaCarro === "Passeio") {
            this._precoDeVenda = this._precoDeCompra * 1.10;
        } else if (this._categoriaCarro === "SUV") {
            this._precoDeVenda = this._precoDeCompra * 1.12;
        }
    }

    public toString(): string {
        this.definirPrecoDeVenda();
        return `Nome do carro: ${this._modeloCarro}, Categoria: ${this._categoriaCarro}, Preço de compra: ${this._precoDeCompra.toFixed(2)}, Preço de venda: ${this._precoDeVenda.toFixed(2)}`;
    }

    public set modeloCarro(novoModelo: string) {
        this._modeloCarro = novoModelo;
    }
    
    public set categoriaCarro(novaCategoria: string) {
        this._categoriaCarro = novaCategoria;
    }

    public set precoDeCompra(novoPrecoDeCompra: number) {
        this._precoDeCompra = novoPrecoDeCompra;
    }
}

const carro = new Carro("Toyota Corolla", "Passeio", 100000);

console.log(carro.toString());

carro.modeloCarro = "Fiat Fastback";
carro.categoriaCarro = "SUV";
carro.precoDeCompra = 10000;

console.log(carro.toString());