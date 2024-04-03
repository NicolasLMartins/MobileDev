"use strict";
class Infracao {
    constructor(placaDoVeiculo, data, hora, kmPorHora) {
        this._placaDoVeiculo = placaDoVeiculo;
        this._data = data;
        this._hora = hora;
        this._kmPorHora = kmPorHora;
    }
    situacao() {
        if (this._kmPorHora <= 60) {
            return "Veículo em situação regular";
        }
        else {
            return "Veículo multado por excesso de velocidade";
        }
    }
    toString() {
        return `Placa do veículo: ${this._placaDoVeiculo}, Data: ${this._data}, Hora: ${this._hora}, Km/h: ${this._kmPorHora}, Situação: ${this.situacao()}`;
    }
    set kmPorHora(novoKmPorHora) {
        this._kmPorHora = novoKmPorHora;
    }
}
const infracao = new Infracao("123-ASDF", "03/04/2024", "22:00", 60);
console.log(infracao.toString());
infracao.kmPorHora = 70;
console.log(infracao.toString());
