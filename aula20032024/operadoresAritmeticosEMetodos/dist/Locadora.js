"use strict";
var ModeloCarro;
(function (ModeloCarro) {
    ModeloCarro["TOYOTA_COROLLA"] = "Toyota Corolla";
    ModeloCarro["VOLKSWAGEN_JETTA"] = "Volkswagen Jetta";
    ModeloCarro["FIAT_UNO"] = "Fiat Uno";
})(ModeloCarro || (ModeloCarro = {}));
class Locadora {
    constructor() {
        this._valoresDiarios = {
            [`${ModeloCarro.TOYOTA_COROLLA}_2024`]: 150000,
            [`${ModeloCarro.VOLKSWAGEN_JETTA}_2016`]: 70000,
            [`${ModeloCarro.FIAT_UNO}_1999`]: 40000,
        };
    }
    alugarCarro(modelo, ano, qtdDias) {
        const chave = `${modelo}_${ano}`;
        if (!(chave in this._valoresDiarios)) {
            console.log(`O ano ${ano} não está cadastrado para o modelo ${modelo}`);
            return;
        }
        this._modeloCarro = modelo;
        this._anoCarro = ano;
        this._qtdDias = qtdDias;
        this._valorTotal = this.valorTotal();
    }
    ;
    valorTotal() {
        const chave = `${this._modeloCarro}_${this._anoCarro}`;
        const valorDiario = this._valoresDiarios[chave];
        return this._qtdDias * valorDiario;
    }
    imprimirInformacoes() {
        console.log(`Modelo e ano do carro alugado: ${this._modeloCarro}, ${this._anoCarro}. Valor total: R$ ${this._valorTotal.toFixed(2)}`);
    }
}
const locadora = new Locadora();
locadora.alugarCarro(ModeloCarro.TOYOTA_COROLLA, 2024, 2);
locadora.imprimirInformacoes();
locadora.alugarCarro(ModeloCarro.VOLKSWAGEN_JETTA, 2016, 2);
locadora.imprimirInformacoes();
locadora.alugarCarro(ModeloCarro.FIAT_UNO, 1999, 2);
locadora.imprimirInformacoes();
