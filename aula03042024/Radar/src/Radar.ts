class Infracao {
    private _placaDoVeiculo: string;
    private _data: string;
    private _hora: string;
    private _kmPorHora: number;

    constructor(
        placaDoVeiculo: string,
        data: string,
        hora: string,
        kmPorHora: number
    ) {
        this._placaDoVeiculo = placaDoVeiculo;
        this._data = data;
        this._hora = hora;
        this._kmPorHora = kmPorHora;
    }

    private situacao(): string {
        if (this._kmPorHora <= 60) {
            return "Veículo em situação regular";
        } else {
            return "Veículo multado por excesso de velocidade";
        }
    }

    public toString(): string {
        return `Placa do veículo: ${this._placaDoVeiculo}, Data: ${this._data}, Hora: ${this._hora}, Km/h: ${this._kmPorHora}, Situação: ${this.situacao()}`;
    }

    public set kmPorHora(novoKmPorHora: number) {
        this._kmPorHora = novoKmPorHora;
    }
}

const infracao = new Infracao("123-ASDF", "03/04/2024", "22:00", 60);

console.log(infracao.toString());

infracao.kmPorHora = 70;

console.log(infracao.toString());