"use strict";
class Contador {
    constructor(valor) {
        this._valor = valor;
    }
    increment() {
        this._valor += 5;
    }
    decrement() {
        this._valor -= 2;
    }
    get valor() {
        return this._valor;
    }
    ;
}
const contador = new Contador(5);
console.log(contador.valor);
contador.increment();
console.log(contador.valor);
contador.decrement();
console.log(contador.valor);
