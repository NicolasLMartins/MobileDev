"use strict";
class Carro {
    constructor(hasFullTank) {
        this._hasFullTank = hasFullTank;
    }
    isMoving() {
        if (this._hasFullTank) {
            return "O carro está se movendo.";
        }
        else {
            return "O carro não está se movendo.";
        }
    }
    set hasFullTank(novoValor) {
        this._hasFullTank = novoValor;
    }
}
const carro = new Carro(true);
console.log(carro.isMoving());
carro.hasFullTank = false;
console.log(carro.isMoving());
