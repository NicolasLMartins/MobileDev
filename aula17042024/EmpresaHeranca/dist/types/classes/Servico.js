"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
const Empresa_1 = require("./Empresa");
class Servico extends Empresa_1.Empresa {
    constructor(nomeEmpresa, ramoAtividade, tipoServico, telefone, email) {
        super(nomeEmpresa, ramoAtividade);
        this._tipoServico = tipoServico;
        this._telefone = telefone;
        this._email = email;
    }
    toString() {
        return `Nome da empresa: ${this._nomeEmpresa},\nRamo Atividade: ${this._ramoAtividade},\nTipo de serviço: ${this._tipoServico},\nTelefone: ${this._telefone},\nEmail: ${this._email}`;
    }
}
exports.Servico = Servico;
