export class Empresa {
    protected _nomeEmpresa: string;
    protected _ramoAtividade: string

    constructor(
        nomeEmpresa: string,
        ramoAtividade: string
    ) {
        this._nomeEmpresa = nomeEmpresa;
        this._ramoAtividade = ramoAtividade;
    }
}