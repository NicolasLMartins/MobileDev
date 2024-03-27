class Carro {
    private _hasFullTank: boolean;

    constructor(hasFullTank: boolean) {
        this._hasFullTank = hasFullTank;
    }

    public isMoving(): string {
        if (this._hasFullTank) {
            return "O carro está se movendo.";
        } else {
            return "O carro não está se movendo."
        }
    }

    set hasFullTank(novoValor: boolean) {
        this._hasFullTank = novoValor;
    }
}

const carro = new Carro(true);

console.log(carro.isMoving());

carro.hasFullTank = false;

console.log(carro.isMoving());