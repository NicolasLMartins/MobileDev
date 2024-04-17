import { Empresa } from "./Empresa";

export class Servico extends Empresa {
    protected _tipoServico: string;
    protected _telefone: string;
    protected _email: string;

    constructor(
        nomeEmpresa: string,
        ramoAtividade: string,
        tipoServico: string,
        telefone: string,
        email: string
    ) {
        super(nomeEmpresa, ramoAtividade);
        this._tipoServico = tipoServico;
        this._telefone = telefone;
        this._email = email;
    }

    public toString(): string {
        return `Nome da empresa: ${this._nomeEmpresa},\nRamo Atividade: ${this._ramoAtividade},\nTipo de serviço: ${this._tipoServico},\nTelefone: ${this._telefone},\nEmail: ${this._email}`
    }
}