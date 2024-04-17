"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaNomes = void 0;
class ListaNomes {
    constructor() {
        this._nomes = ["Eduardo", "Larah", "Nícolas", "Lucas"];
    }
    exibirNomes() {
        console.log("Nomes: ");
        this._nomes.forEach(nome => {
            console.log(nome);
        });
    }
}
exports.ListaNomes = ListaNomes;
