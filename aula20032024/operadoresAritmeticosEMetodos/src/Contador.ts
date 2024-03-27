class Contador {
    private _valor: number;
    
    constructor(
        valor: number
    ) {
        this._valor = valor;
    }


    
    public increment(): void {
        this._valor += 5;
    }

    public decrement(): void {
        this._valor -= 2;
    }

    get valor() {
        return this._valor;
    };
}

const contador = new Contador(5);
console.log(contador.valor);

contador.increment();
console.log(contador.valor);

contador.decrement();
console.log(contador.valor);
