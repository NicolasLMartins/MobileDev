import { Financeira } from "./Financeira";

export class Banco extends Financeira {
    private _nomeCliente: string;
    private _cpf: string;
    private _capitalAplicado: number;
    private _lucro!: number;

    constructor(
        lucroPercentual: number,
        nomeCliente: string,
        cpf: string,
        capitalAplicado: number,
    ) {
        super(lucroPercentual);
        this._nomeCliente = nomeCliente;
        this._cpf = cpf;
        this._capitalAplicado = capitalAplicado;
    }

    private calcularLucro(): void {
        this._lucro = this._capitalAplicado * (this._lucroPercentual / 100 + 1)
    }
    
    public toString(): string {
        this.calcularLucro();

        return `Nome do cliente: ${this._nomeCliente}, CPF: ${this._cpf}, Capital aplicado: R$ ${this._capitalAplicado.toFixed(2)}, Lucro: R$ ${this._lucro.toFixed(2)}`;
    }
}