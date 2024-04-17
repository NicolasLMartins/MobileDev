"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
const Financeira_1 = require("./Financeira");
class Banco extends Financeira_1.Financeira {
    constructor(lucroPercentual, nomeCliente, cpf, capitalAplicado) {
        super(lucroPercentual);
        this._nomeCliente = nomeCliente;
        this._cpf = cpf;
        this._capitalAplicado = capitalAplicado;
    }
    calcularLucro() {
        this._lucro = this._capitalAplicado * (this._lucroPercentual / 100 + 1);
    }
    toString() {
        this.calcularLucro();
        return `Nome do cliente: ${this._nomeCliente}, CPF: ${this._cpf}, Capital aplicado: R$ ${this._capitalAplicado.toFixed(2)}, Lucro: R$ ${this._lucro.toFixed(2)}`;
    }
}
exports.Banco = Banco;
