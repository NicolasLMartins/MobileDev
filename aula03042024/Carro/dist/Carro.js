"use strict";
class Carro {
    constructor(modeloCarro, categoriaCarro, precoDeCompra) {
        this._modeloCarro = modeloCarro;
        this._categoriaCarro = categoriaCarro;
        this._precoDeCompra = precoDeCompra;
    }
    definirPrecoDeVenda() {
        if (this._categoriaCarro === "Passeio") {
            this._precoDeVenda = this._precoDeCompra * 1.10;
        }
        else if (this._categoriaCarro === "SUV") {
            this._precoDeVenda = this._precoDeCompra * 1.12;
        }
    }
    toString() {
        this.definirPrecoDeVenda();
        return `Nome do carro: ${this._modeloCarro}, Categoria: ${this._categoriaCarro}, Preço de compra: ${this._precoDeCompra.toFixed(2)}, Preço de venda: ${this._precoDeVenda.toFixed(2)}`;
    }
    set modeloCarro(novoModelo) {
        this._modeloCarro = novoModelo;
    }
    set categoriaCarro(novaCategoria) {
        this._categoriaCarro = novaCategoria;
    }
    set precoDeCompra(novoPrecoDeCompra) {
        this._precoDeCompra = novoPrecoDeCompra;
    }
}
const carro = new Carro("Toyota Corolla", "Passeio", 100000);
console.log(carro.toString());
carro.modeloCarro = "Fiat Fastback";
carro.categoriaCarro = "SUV";
carro.precoDeCompra = 10000;
console.log(carro.toString());
